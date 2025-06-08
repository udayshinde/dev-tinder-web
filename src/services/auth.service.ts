import { Injectable } from '@angular/core'
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    loginUrl: any = `${environment.apiBaseUrl}/login`;
    constructor(private http: HttpClient) {

    }
    login(emailId: string, password: string): Observable<any> {
        const body = { emailId, password };
        return this.http.post(this.loginUrl, body, { withCredentials: true });
    }

    logout(): Observable<any> {
        return this.http.post(`${environment.apiBaseUrl}/logout`, {}, { withCredentials: true });
    }

    signUp(payload: any): Observable<any> {
        return this.http.post(`${environment.apiBaseUrl}/signup`, payload, { withCredentials: true })
    }
}
