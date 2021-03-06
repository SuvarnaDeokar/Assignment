import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/customer/customer';
import { CustomerService } from 'src/app/Services/CustomerService/customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id:number;
  customer : Customer = new Customer();
  

  constructor(public cservice : CustomerService,private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.cservice.getCustomerById(this.id).subscribe(data => { this.customer = data;},
      error => console.log(error));
  }
  SaveAndUpdateCustomer(currentCust:Customer)
  {
      this.updateData(currentCust);
  }
  updateData(cust:Customer)
  {
    this.cservice.editCustomer(cust).subscribe();
  }
}
