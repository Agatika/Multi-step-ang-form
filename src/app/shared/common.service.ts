import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enquiry } from '../Model/enquiry';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpclient:HttpClient) { }
  enquiry:Enquiry={
    cID: 0,
    firstName: '',
    lastName: '',
    age: 0,
    gender: '',
    email: '',
    mobileNo: 0,
    pancardNo: '',
    password: ''
  }
  
  postData(enq:Enquiry):Observable<any>
  {
     return this.httpclient.post("http://localhost:8080/ApiEnquiry/addEnquiry",enq)
     window.location.reload();
  }
  
}
