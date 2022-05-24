import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services/authentication.service';
import { LogService } from './_services/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router:Router,
    private authenticaitonService:AuthenticationService,
    private logger:LogService
  ){}
  title = 'spaceOrderOfBattle';
  logout():void{
    this.authenticaitonService.logout();
    this.router.navigate(['/SOB/login']);
  }
  isLoggedIn():boolean{
    //this.logger.log("App::isLoggedIn current user vale:"+JSON.stringify(this.authenticaitonService.currentUserEncodeValue));
    return this.authenticaitonService.currentUserValue!=null;
  }
  
}
