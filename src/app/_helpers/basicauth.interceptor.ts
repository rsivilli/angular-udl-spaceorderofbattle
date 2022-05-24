import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../_services/authentication.service';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor{
    constructor(
        private authenticationService: AuthenticationService
        ){}
    
        intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
            let currentUser = this.authenticationService.currentUser;
            let encodedVal = this.authenticationService.currentUserEncodeValue;
            if(currentUser && encodeURIComponent){
                request = request.clone({
                    setHeaders:{
                        'Content-Type': 'application/json',
                        Authorization:'Basic '+encodedVal
                    }
                })

            }

            return next.handle(request);
        }
}