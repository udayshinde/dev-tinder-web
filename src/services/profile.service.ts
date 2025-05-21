import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "../utils/constants";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class ProfileService {
    constructor(private http: HttpClient) {

    }

    getUserProfile(): Observable<any> {
        const profileUrl = `${BASE_URL}/profile/view`
        return this.http.get(profileUrl, { withCredentials: true });
    }
}