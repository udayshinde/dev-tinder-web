import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";


@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private http: HttpClient) {

    }

    getUserProfile(): Observable<any> {
        const profileUrl = `${environment.apiBaseUrl}/profile/view`
        return this.http.get(profileUrl);
    }
    getFeed(): Observable<any> {
        return this.http.get(`${environment.apiBaseUrl}/user/feed`);
    }

    updateProfile(data: any): Observable<any> {
        return this.http.patch(`${environment.apiBaseUrl}/profile/edit`, data);
    }

    getUserConnections(): Observable<any> {
        return this.http.get(`${environment.apiBaseUrl}/user/connections`);
    }
    getUserRequests(): Observable<any> {
        return this.http.get(`${environment.apiBaseUrl}/user/requests/recieved`)
    }
}