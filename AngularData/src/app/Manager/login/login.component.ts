import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MregistrationService } from 'src/app/Services/ManagerService/mregistration.service';
import { Manager } from 'src/app/Models/manager';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  manager = new Manager();   
  msg = " ";
  constructor(private mservice : MregistrationService, private router : Router) { }
  ngOnInit(): void {}
  loginManager()
  {
    this.mservice.loginManagerFromRemote(this.manager).
    subscribe(data => {
      console.log("Login Successfully");
      this.router.navigate(['/Dashboard'])
    },
    error =>{
      console.log("Bad Credientials");
      this.msg = "Bad Credientials, please enter valide emailId and password..."}
      );
  }
}

