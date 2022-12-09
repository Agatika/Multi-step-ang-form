import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Enquiry } from '../Model/enquiry';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css']
})
export class EnquiryFormComponent implements OnInit {

 constructor(private common:CommonService,private fb:FormBuilder) { }
  enq:Enquiry[];
  enquiryForm:FormGroup;
  ngOnInit(): void {
    this.enquiryForm=this.fb.group({
      cID:[this.common.enquiry.cID,[Validators]],
      firstName:[this.common.enquiry.firstName,[Validators.required]],
      lastName:[this.common.enquiry.lastName,[Validators.required]],
      age:[this.common.enquiry.age,[Validators.required]],
      gender:[this.common.enquiry.gender,[Validators.required]],
      email:[this.common.enquiry.email,[Validators.required]],
      mobileNo:[this.common.enquiry.mobileNo,[Validators.maxLength[10].required]],
      pancardNo:[this.common.enquiry.pancardNo,[Validators.required]],
      password:[this.common.enquiry.password,[Validators.required]]
      })
  }

  submitData():any
  {
    if(this.enquiryForm.controls['cID'].value)
    {
      alert("Product Registered Successfully.....")
    return this.common.postData(this.enquiryForm.value).subscribe();
    }
  }
  reset()
  {
    return this.common.enquiry=Object.assign({},null)
    window.location.reload();
  }
  

}
