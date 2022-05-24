import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { AlertService } from '../_services/alert.service';
import {first} from 'rxjs/operators'
import { LogService } from '../_services/log.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

  constructor(
    private formBuilder:FormBuilder,
    private route: ActivatedRoute,
    private router:Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private logService:LogService
  ) { 
    if(this.authenticationService.currentUserValue){
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.logService.log("Init of LoginComponent");
    this.loginForm = this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['retrnUrl']|| '/';
  }

  get f() {return this.loginForm.controls;}

  onSubmit(){
    //this.logService.log("LoginComponent::onSubmit");
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(data => {
        this.router.navigate([this.returnUrl]);

      },
      error =>{
        //TODO add alert serivce and handling
        //this.alertService.error(error);
        this.loading = false;

      });
  }

}
