import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL } from "../utils/constants";

@Injectable({
    providedIn: 'root'
})
export class RequestService {
    constructor(private http: HttpClient) {

    }
    sendOrIgnoreRequest(status: any, toUserId: any): Observable<any> {
        return this.http.post(`${BASE_URL}/request/send/${status}/${toUserId}`, {}, { withCredentials: true })
    }
    acceptOrRejectRequest(status: any, toUserId: any): Observable<any> {
        return this.http.post(`${BASE_URL}/request/review/${status}/${toUserId}`, {}, { withCredentials: true })
    }
}