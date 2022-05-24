import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';

import {OnOrbitEntity} from '../_models/onorbitentity';
import { OnOrbitEntityExtended } from '../_models/onorbitentityextended';

@Injectable({
  providedIn: 'root'
})
export class EntityService {
  private 

  constructor(private http:HttpClient) { }
  
    /** GET Onorbit entities from the server 
    getOnOrbitEntities() : Observable<OnOrbitEntity[]> {
      return this.http.get<OnOrbitEntity[]>(this.onorbitentityUrl);
    }
    getOnOrbitEntity(id:number):Observable<OnOrbitEntityExtended>{
      return this.http.get<OnOrbitEntityExtended>(this.onorbitentitybyID+id);
    }
    */
}




