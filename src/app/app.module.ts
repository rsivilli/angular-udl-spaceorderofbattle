import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OnorbitentitiesComponent } from './onorbitentities/onorbitentities.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OnorbitentityService } from './_services/onorbitentity.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OnorbitDetailComponent } from './onorbit-detail/onorbit-detail.component';
import { AntennaComponent } from './antenna/antenna.component';
import { BatteryComponent } from './battery/battery.component';
import { SolararrayComponent } from './solararray/solararray.component';
import { ThrusterComponent } from './thruster/thruster.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './_services/authentication.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BasicAuthInterceptor } from './_helpers/basicauth.interceptor';
import { EntityComponent } from './entity/entity.component';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { CommComponent } from './comm/comm.component';
import { BusComponent } from './bus/bus.component';
import { EngineComponent } from './engine/engine.component';
import { SensorComponent } from './sensor/sensor.component';
import { RfemitterComponent } from './rfemitter/rfemitter.component';
import { OrganizationComponent } from './organization/organization.component';
import { PlotvizmagComponent } from './plotvizmag/plotvizmag.component';
import { PlotrcsComponent } from './plotrcs/plotrcs.component';
import { TlevisualizerComponent } from './tlevisualizer/tlevisualizer.component';


@NgModule({
  declarations: [
    AppComponent,
    OnorbitentitiesComponent,
    DashboardComponent,
    OnorbitDetailComponent,
    AntennaComponent,
    BatteryComponent,
    SolararrayComponent,
    ThrusterComponent,
    LoginComponent,
    EntityComponent,
    CommComponent,
    BusComponent,
    EngineComponent,
    SensorComponent,
    RfemitterComponent,
    OrganizationComponent,
    PlotvizmagComponent,
    PlotrcsComponent,
    TlevisualizerComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi:true},
    {provide:HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi:true},
    OnorbitentityService, 
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
