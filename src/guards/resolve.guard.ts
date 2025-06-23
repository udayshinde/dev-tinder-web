import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../services/user.service";
import { catchError, Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {
    constructor(private userService: UserService) { }
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> {
        return this.userService.getUserConnections().pipe(
            catchError(err => {
                console.error('Error fetching user connections:', err);
                return of([]);
            })
        )
    }

}