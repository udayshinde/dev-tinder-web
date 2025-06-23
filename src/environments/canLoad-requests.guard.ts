import { Inject, Injectable } from "@angular/core";
import { CanLoad, Route, Router, UrlSegment, UrlTree } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class CanLoadRequestsGuard implements CanLoad {
    constructor(private router: Router) { }
    canLoad(
        route: Route,
        segment: UrlSegment[]
    ): boolean | UrlTree {
        const isAuthenticated = !!localStorage.getItem('token');
        console.log("canLoad guard loaded")
        if (!isAuthenticated) {
            return this.router.parseUrl('/login')
        }
        return true;
    }
}