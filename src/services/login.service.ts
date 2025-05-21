import { Injectable } from '@angular/core'
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { BASE_URL } from '../utils/constants';
@Injectable({
    providedIn: 'root'
})

export class LoginService {
    loginUrl: any = `${BASE_URL}/login`;
    constructor(private http: HttpClient) {

    }
    login(emailId: string, password: string): Observable<any> {
        const body = { emailId, password };
        return this.http.post(this.loginUrl, body, { withCredentials: true });
    }
}
