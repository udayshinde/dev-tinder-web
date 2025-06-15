import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class RequestService {
    constructor(private http: HttpClient) {

    }
    sendOrIgnoreRequest(status: any, toUserId: any): Observable<any> {
        return this.http.post(`${environment.apiBaseUrl}/request/send/${status}/${toUserId}`, {})
    }
    acceptOrRejectRequest(status: any, toUserId: any): Observable<any> {
        return this.http.post(`${environment.apiBaseUrl}/request/review/${status}/${toUserId}`, {})
    }
}