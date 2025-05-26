import { Injectable } from '@angular/core'
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { BASE_URL } from '../utils/constants';
@Injectable({
    providedIn: 'root'
})

export class AuthService {
    loginUrl: any = `${BASE_URL}/login`;
    constructor(private http: HttpClient) {

    }
    login(emailId: string, password: string): Observable<any> {
        const body = { emailId, password };
        return this.http.post(this.loginUrl, body, { withCredentials: true });
    }

    logout(): Observable<any> {
        return this.http.post(`${BASE_URL}/logout`, {}, { withCredentials: true });
    }

    signUp(payload: any): Observable<any> {
        return this.http.post(`${BASE_URL}/signup`, payload, { withCredentials: true })
    }
}
