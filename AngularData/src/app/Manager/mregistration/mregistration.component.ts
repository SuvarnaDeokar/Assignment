import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { MregistrationService } from 'src/app/Services/ManagerService/mregistration.service';
import { Manager } from 'src/app/Models/manager';
@Component({
  selector: 'app-mregistration',
  templateUrl: './mregistration.component.html',
  styleUrls: ['./mregistration.component.css']
})
export class MregistrationComponent implements OnInit {
  objMg=new Manager();
  temp: Manager[];

  constructor(public mservice : MregistrationService, private router : Router) { }

  ngOnInit(): void {
  }
  newregister()
  {
    this.router.navigate(['']);
  }
  saveData(objMg:Manager)
  {
    this.mservice.addManager(objMg).subscribe();
    this.router.navigate(['']);
  }
  
}
