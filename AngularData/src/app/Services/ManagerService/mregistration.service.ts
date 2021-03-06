import { Injectable } from '@angular/core';
import { Manager } from 'src/app/Models/manager';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MregistrationService {

  constructor(private http : HttpClient) { }

  public loginManagerFromRemote(manager : Manager) : Observable<any>
  {
    return this.http.post("http://localhost:1515/login",manager);
  }
  currentManager:Manager=
    {
      id : null,
      firstname : '',
      lastname : '',
      email : '',
      address : '',
      company : '',
      password : ''
    }
    addManager(objMg:Manager):Observable<Manager>
    {
      return this.http.post<Manager>("http://localhost:1515/register-manager",objMg);
    }
}
