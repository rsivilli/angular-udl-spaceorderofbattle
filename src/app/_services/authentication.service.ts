import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, EMPTY, empty } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    private currentUserEncodeSubject: BehaviorSubject<string>;
    private httpOptions:HttpHeaders;
    public currentUser: Observable<User>;
    public currentUserEncode: Observable<string>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.currentUserEncodeSubject = new BehaviorSubject<string>(localStorage.getItem('currentUserEncode'));
        this.currentUserEncode = this.currentUserEncodeSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }
    public get currentUserEncodeValue(): string{
        return this.currentUserEncodeSubject.value;
    }

    login(username: string, password: string) {
        localStorage.setItem('currentUserEncode',btoa(username+':'+password));
        this.currentUserEncodeSubject.next(btoa(username+':'+password));
        this.httpOptions = 
            new HttpHeaders(
              {'Content-Type': 'application/json',
               'Authorization': 'Basic '+btoa(username+':'+password)
              }
            );
            
            
        
          
        return this.http.get<User>(`https://unifieddatalibrary.com/basicAuth`,{headers:this.httpOptions})
            .pipe(map(user => {
                // login successful if there's a jwt token in the response'
                
                if (user && user.auth===true) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }else{
                    this.logout();

                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        localStorage.removeItem('currentUserEncode');
        this.currentUserEncodeSubject.next(null);
    }
}