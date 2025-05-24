import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "../utils/constants";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private http: HttpClient) {

    }

    getUserProfile(): Observable<any> {
        const profileUrl = `${BASE_URL}/profile/view`
        return this.http.get(profileUrl, { withCredentials: true });
    }
    getFeed(): Observable<any> {
        return this.http.get(`${BASE_URL}/user/feed`, { withCredentials: true });
    }

    updateProfile(data: any): Observable<any> {
        return this.http.patch(`${BASE_URL}/profile/edit`, data, { withCredentials: true });
    }

    getUserConnections(): Observable<any> {
        return this.http.get(`${BASE_URL}/user/connections`, { withCredentials: true });
    }
}