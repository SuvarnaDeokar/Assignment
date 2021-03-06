import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../Models/customer/customer';
import { CustomerService } from '../Services/CustomerService/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'CustomerDetail';
  temp:Customer[];
  objCust=new Customer();
  constructor(public cservice : CustomerService, private router : Router) { }
  ngOnInit(): void {
    this.getData();
  }
  newregister()
  {
    this.router.navigate(['/CustomerDetail']);
  }
  getData()
  {
    this.cservice.getCustomer().subscribe((data)=>{this.temp=data;})
  }
  updateCustomer(c)
  {
    this.cservice.currentCustomer = Object.assign({},c);
  }
  deleteData(empid)
  {
   // console.log(c.empid); 
    // this.cservice.deleteCustomer(c.empid).subscribe(
    //   (resp) => { console.log(resp);
    //   this.getData();},
    //   err => {console.log(err);}
    // );
    this.cservice.deleteCustomer(empid).subscribe((data:Customer)=>{this.getData();});
  }
}
