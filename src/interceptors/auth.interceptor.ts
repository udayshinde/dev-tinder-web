import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";


export const authInterceptor: HttpInterceptorFn = (
    req: HttpRequest<any>,
    next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
    const router = inject(Router);
    const authRequest = req.clone({
        withCredentials: true
    });
    return next(authRequest).pipe(
        catchError((error: HttpErrorResponse) => {
            if (error.status === 401 || error.status === 403) {
                // Handle unauthorized access, e.g., redirect to login
                localStorage.clear();
                router.navigate(['/login']);
                console.error('Unauthorized access - redirecting to login');
            }
            return throwError(() => error);
        })
    );
}