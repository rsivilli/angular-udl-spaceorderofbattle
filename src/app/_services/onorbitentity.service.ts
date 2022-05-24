import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';

import {OnOrbitEntity} from '../_models/onorbitentity';
import { OnOrbitEntityExtended } from '../_models/onorbitentityextended';
import { Entity } from '../_models/entity';
import { Comm } from '../_models/comm';
import { Bus } from '../_models/bus';
import { Cacheable } from 'ngx-cacheable';
import { Engine } from '../_models/engine';
import { Ob } from '../_models/ob';
import {TLE} from '../_models/tle';


@Injectable()
export class OnorbitentityService {
  private onorbitentityUrl = 'https://unifieddatalibrary.com/udl/onorbit?geoSlot=-180..180';  // URL to web api
  private onorbitentityQuery = 'https://unifieddatalibrary.com/udl/onorbit?';
  private entityQuery = 'https://unifieddatalibrary.com/udl/entity?';
  private onorbitentitybyID = 'https://unifieddatalibrary.com/udl/onorbit/'
  private entityById='https://unifieddatalibrary.com/udl/entity/'
  private commById='https://unifieddatalibrary.com/udl/comm/'
  private busById='https://unifieddatalibrary.com/udl/bus/'
  private busByQuery='https://unifieddatalibrary.com/udl/bus'
  private engineById='https://unifieddatalibrary.com/udl/engine/'
  private obs='https://unifieddatalibrary.com/udl/eoobservation?'
  private tlequery="https://unifieddatalibrary.com/udl/elset?"

  private cacheTime = 3600000;

  constructor(
    private http:HttpClient
    ) {}


    /** GET Onorbit entities from the server */
    @Cacheable({maxAge:3600000})
    getOnOrbitEntities(querystring:string) : Observable<OnOrbitEntity[]> {
      if(!querystring) return this.http.get<OnOrbitEntity[]>(this.onorbitentityUrl);
      return this.http.get<OnOrbitEntity[]>(this.onorbitentityQuery+querystring);
    }
    @Cacheable({maxAge:3600000})
    getOnOrbitEntity(id:string):Observable<OnOrbitEntityExtended>{
      return this.http.get<OnOrbitEntityExtended>(this.onorbitentitybyID+id);
    }
    @Cacheable({maxAge:3600000})
    getEntity(id:string):Observable<Entity>{
      return this.http.get<Entity>(this.entityById+id);
    }
    @Cacheable({maxAge:3600000})
    getEntityQuery(querystring:string):Observable<Entity[]>{
      return this.http.get<Entity[]>(this.entityQuery+querystring);
    }
    @Cacheable({maxAge:3600000})
    getComm(id:string):Observable<Comm>{
      return this.http.get<Comm>(this.commById+id);
    }
    @Cacheable({maxAge:3600000})
    getBus(id:string):Observable<Bus>{
      return this.http.get<Bus>(this.busById+id);
    }
    @Cacheable({maxAge:3600000})
    getBuses(query:string):Observable<Bus[]>{
      return this.http.get<Bus[]>(this.busById+query);
    }
    @Cacheable({maxAge:3600000})
    getEngine(id:string):Observable<Engine>{
      return this.http.get<Engine>(this.engineById+id);
    }
    @Cacheable({maxAge:3600000})
    getObs(query:string):Observable<Ob[]>{
      return this.http.get<Ob[]>(this.obs+query);
    }
    @Cacheable({maxAge:3600000})
    getTLEs(query:string):Observable<TLE[]>{
      return this.http.get<TLE[]>(this.tlequery+query);
    }

}
