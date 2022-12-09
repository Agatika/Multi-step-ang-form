import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  
  personalDetails: FormGroup;
  addressDetails: FormGroup;
  employeeDetails: FormGroup;
  vehicleDetails: FormGroup;
  documents: FormGroup;
  personal_step = false;
  address_step = false;
  employee_step = false;
  vehicle_step= false;
  document_step= false;
  step = 1;

  selectphoto : any;
  selectSignature : any;
  selectpancard : any;
  selectaddressproof : any;
  selectadharcard : any;
  selectincometax : any;
  selectudyogadhar : any;
  selectbankcheque : any;
  selectsalaryslip : any;
  selectbankstatement : any;
  imageSrc1 : any;
  imageSrc2 : any;
  imageSrc3 : any;
  imageSrc4 : any;
  imageSrc5 : any;
  imageSrc6 : any;
  imageSrc7 : any;
  imageSrc8 : any;
  imageSrc9 : any;
  imageSrc10 : any;
  data : any[];
  reader = new FileReader();
 
  constructor(private formBuilder: FormBuilder,private commonservice:CommonService) { }

  ngOnInit(): void {
    this.personalDetails = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      dob: [''],
      age: [''],
      gender: [''],
      email: [''],
    });
    this.addressDetails = this.formBuilder.group({
      houseName: [''],
      houseNumber: [''],
      areaname: [''],
      streetName: [''],
      landmark: [''],
      cityname: [''],
      district: [''],
      pincode: [''],
      state: [''],
      mobileNumber: [''],
      additionalmobileNumber: [''],
    });  
  this.employeeDetails = this.formBuilder.group({
      //educational
      educationType: [''],
      qualification: [''],
      university: [''],
      total_marks: [''],
      //professional
      professionType: [''],
      professionsalary: [''],
      professionsalaryType: [''],
      professionworkingperiod: [''],
      professionDesignation: [''],
      //cibil
      cibilscore: [''],
      //currentloan
      accountNo: [''],
      accountType: [''],
      accountBalance: [''],
      accountHolderName: [''],
      accountStatus: [''],
      //previousloan
      currentloanacountNo: [''],
      emiDetails: [''],
      loanAmount: [''],
      rateOfInterest: [''],
      tenure: [''],
      totalamounttobepaid: [''],
      processingfee: [''],
      totalInterest: [''],
      sanctionDate: [''],
      remark: [''],
      status: ['']
  });
  this.vehicleDetails = this.formBuilder.group({
      vehicleCategory: [''],
      vehicleType: [''],
      vehicleModel: [''],
      vehicleCompany: [''],
      chassisNo: [''],
      engineNo: [''],
      color: [''],
      showroomPrice: [''],
      RTOregistration: [''],
      showroomDetails: ['']
  });
  this.documents = this.formBuilder.group({
      highest_qualification: [''],
      university: [''],
      total_marks: ['']
  })
  }

  get personal() { return this.personalDetails.controls; }
  get address() { return this.addressDetails.controls; }
  get employee() { return this.employeeDetails.controls; }
  get vehicle() { return this.vehicleDetails.controls; }
  get document() { return this.document.controls; }

  next(){
    this.step++
    if(this.step==1)
    {
      this.personal_step = true;
      if (this.personalDetails.invalid) 
      { return }
    }
    if(this.step==2)
    {
      this.address_step = true;
      if (this.addressDetails.invalid) 
      { return }
    }
    if(this.step==3)
    {
      this.employee_step = true;
      if (this.employeeDetails.invalid) 
      { return }
    }
    if(this.step==4)
    {
      this.vehicle_step = true;
      if (this.vehicleDetails.invalid) 
      { return }
    }

    // if(this.step == 1)
    // {
    //       this.personal_step = true;
    //       if (this.personalDetails.invalid) 
    //       { return }
    //       this.step++
    // }
    // if(this.step == 2)
    // {
    //    this.address_step = true;
    // if (this.addressDetails.invalid) 
    //       { return }
    //    this.step++
    // }
    // if(this.step == 3)
    // {
    //    this.employee_step = true;
    //    if (this.personalDetails.invalid) 
    //       { return }
    //    this.step++
    // }
    // if(this.step == 4)
    // {
    //    this.vehicle_step = true;
    //    if (this.personalDetails.invalid) 
    //       { return }
    //    this.step++
    // }
    
  }

  previous(){
    this.step--
    if(this.step==1)
    {
      this.personal_step = false;
    }
    if(this.step==2)
    {
      this.address_step = false;
    }
    if(this.step==3)
    {
      this.employee_step = false;
    }
    if(this.step==4)
    {
      this.vehicle_step = false;
    }
  }
  onselectphoto(event){
    this.selectphoto = event.target.files[0];
    this.reader.onload = e => this.imageSrc1 = this.reader.result;
    this.reader.readAsDataURL(this.selectphoto); 
   }

   onselectsignature(event){ 
     this.selectSignature = event.target.files[0];
     this.reader.onload = e => this.imageSrc2 = this.reader.result;
     this.reader.readAsDataURL(this.selectSignature);
   }

   onselectpancard(event){
     this.selectpancard = event.target.files[0];
     this.reader.onload = e => this.imageSrc3 = this.reader.result;
     this.reader.readAsDataURL(this.selectpancard);
   }

   onselectaddressproof(event){
    this.selectaddressproof = event.target.files[0];
    this.reader.onload = e => this.imageSrc4 = this.reader.result;
    this.reader.readAsDataURL(this.selectaddressproof);
  }

  oneselectadharcard(event){
    this.selectadharcard = event.target.files[0];
    this.reader.onload = e=> this.imageSrc5 = this.reader.result;
    this.reader.readAsDataURL(this.selectadharcard);
  }

  oneselectincometax(event){
     this.selectincometax = event.target.files[0];
     this.reader.onload = e=> this.imageSrc6 = this.reader.result;
     this.reader.readAsDataURL(this.selectincometax);
  }

  oneselectudyogadhar(event){
    this.selectudyogadhar = event.target.files[0];
    this.reader.onload = e=> this.imageSrc7 = this.reader.result;
    this.reader.readAsDataURL(this.selectudyogadhar);
  }

  oneselectbankcheque(event){
    this.selectbankcheque = event.target.files[0];
    this.reader.onload = e=> this.imageSrc8 = this.reader.result;
    this.reader.readAsDataURL(this.selectbankcheque);
  }

  oneselectsalaryslip(event){
    this.selectsalaryslip = event.target.files[0];
    this.reader.onload = e=> this.imageSrc9 = this.reader.result;
    this.reader.readAsDataURL(this.selectsalaryslip);
  }

  oneselectbankstatement(event){
    this.selectbankstatement = event.target.files[0];
    this.reader.onload = e=> this.imageSrc10 = this.reader.result;
    this.reader.readAsDataURL(this.selectbankstatement);
  }

  submit(){
    if(this.step==5)
    {
      alert("submit");
      this.document_step = true;
      const d = JSON.stringify(this.documents.value);
      const data = new FormData;

          data.append("photo",this.selectphoto);
          data.append("signature", this.selectSignature);
          data.append("pancard",this.selectpancard);
          data.append("addressproof",this.selectaddressproof);
          data.append("adharcard",this.selectadharcard);
          data.append("incometax",this.selectincometax);
          data.append("udyogadhar",this.selectudyogadhar);
          data.append("bankcheque",this.selectbankcheque);
          data.append("salaryslip",this.selectsalaryslip);
          data.append("bankstatement",this.selectbankstatement)

          data.append("custId",d);

          alert ("call")
    
          // this.c.postData(data).subscribe();
      if (this.documents.invalid) 
      alert("invalid");
      { return }
    }
  }

}
