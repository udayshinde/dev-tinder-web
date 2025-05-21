import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL } from "../utils/constants";

@Injectable({
    providedIn: 'root'
})

export class LogoutService {
    constructor(private http: HttpClient) {

    }

    logout(): Observable<any> {
        return this.http.post(`${BASE_URL}/logout`, {}, { withCredentials: true });
    }
}