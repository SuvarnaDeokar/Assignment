import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/customer/customer';
import { CustomerService } from 'src/app/Services/CustomerService/customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  objCust=new Customer();
  temp:Customer[];
  id:number;
  constructor(public cservice : CustomerService,private router : Router,
    private route: ActivatedRoute) { }
  ngOnInit(): void { }
  SaveAndUpdateCustomer(currentCust:Customer)
  {
      this.saveData(currentCust);
  }
  saveData(cust:Customer)
  {
    this.cservice.addCustomer(cust).subscribe((data) => { console.log(data);
    this.router.navigate(['/Dashboard']);});
  }
}
