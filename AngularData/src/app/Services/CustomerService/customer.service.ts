import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/Models/customer/customer';
import { Observable, identity } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

   currentCustomer:Customer=
    {
      empid : null,
    firstname : '',
    lastname : '',
    email : '',
    address : '',
    mobile : null,
    city : ''
    }
    router: any;
    constructor(private httpClient:HttpClient) { }
    getCustomer():Observable<Customer[]>
    {
      return this.httpClient.get<Customer[]>("http://localhost:1515/getAllEmployee");
    }
    addCustomer(objCust:Customer):Observable<Customer>
    {
      return this.httpClient.post<Customer>("http://localhost:1515/register-employee",objCust);
    }
    editCustomer(objCust:Customer):Observable<Customer>
     {
      return this.httpClient.put<Customer>("http://localhost:1515/employee-update",objCust);
     }
    deleteCustomer(empid:number):Observable<any>
    {
      return this.httpClient.delete<Customer>('http://localhost:1515/employee'+`/${empid}`);
    }
    getCustomerById(id:number):Observable<Customer>
    {
      return this.httpClient.get<Customer>("${http://localhost:1515/getAllEmployee}/${id}");
    }
    
}
