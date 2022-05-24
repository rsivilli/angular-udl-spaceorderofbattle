import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OnorbitentitiesComponent } from './onorbitentities/onorbitentities.component';
import { OnorbitDetailComponent } from './onorbit-detail/onorbit-detail.component';
import { AuthGuard } from './guard/guard.component';
import { LoginComponent } from './login/login.component';
import { CommComponent } from './comm/comm.component';
import { BusComponent } from './bus/bus.component';
import { EngineComponent } from './engine/engine.component';
import { EntityComponent } from './entity/entity.component';
import { PlotvizmagComponent } from './plotvizmag/plotvizmag.component';


const routes: Routes =[
  {path: 'SOB/list', component: OnorbitentitiesComponent, canActivate:[AuthGuard]},
  {path: 'SOB/list/:query', component: OnorbitentitiesComponent, canActivate:[AuthGuard]},
  {path: 'SOB/login', component: LoginComponent},
  {path: 'SOB/detail/ONORBIT/:id',component: OnorbitDetailComponent, canActivate:[AuthGuard]},
  {path: 'SOB/detail/COMM/:id',component: CommComponent, canActivate:[AuthGuard]},
  {path: 'SOB/detail/BUS/:id',component: BusComponent, canActivate:[AuthGuard]},
  {path: 'SOB/detail/engine/:id',component: EngineComponent, canActivate:[AuthGuard]},
  {path: 'SOB/detail/entity/:id',component: EntityComponent, canActivate:[AuthGuard]},
  {path:'SOB/visualize/viz', component:PlotvizmagComponent,canActivate:[AuthGuard]},
  {path:'**',redirectTo:'SOB/list'}

]


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
