import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { SocietymasterserviceService } from '../societymasterservice.service';
import { validateBasis } from '@angular/flex-layout';
import { WingDetails } from '../../models/wingdetails';
import { WingRoom } from '../../models/wingroom';

@Component({
  selector: 'app-createsocietymember',
  templateUrl: './createsocietymember.component.html',
  styleUrls: ['./createsocietymember.component.css']
})
export class CreatesocietymemberComponent implements OnInit {

  createSoicetyMemeberForm:FormGroup;
  headerTitle:string = "Create Society Member"
  firstName:FormControl;
  lastName:FormControl;
  phoneNumber:FormControl;
  email:FormControl;
  gender:FormControl;
  roomArea:FormControl;
  possessionStartDate:FormControl;
  societywingID:FormControl;
  roomID:FormControl;

  genderList:string[] = [
    'Male',
    'Female'
  ];

  wingList:WingDetails[];
  roomList:WingRoom[];

  constructor(private societymasterservice: SocietymasterserviceService,public dialogRef: MatDialogRef<CreatesocietymemberComponent>) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.societymasterservice.getWingList().subscribe(res => {this.wingList = res});
  }

  createFormControls()
  {
    this.firstName = new FormControl('',Validators.required);
    this.lastName = new FormControl('',Validators.required);
    this.phoneNumber = new FormControl('',Validators.required);
    this.email = new FormControl('',[Validators.email,Validators.required]);
    this.gender = new FormControl('',Validators.required);
    this.roomArea = new FormControl('',Validators.required);
    this.possessionStartDate = new FormControl('',Validators.required);
    this.societywingID = new FormControl('',Validators.required);
    this.roomID = new FormControl('',Validators.required);
  }

  createForm()
  {
    this.createSoicetyMemeberForm = new FormGroup({
      firstName: this.firstName,
      lastName:this.lastName,
      phoneNumber:this.phoneNumber,
      email: this.email,
      gender:this.gender,
      roomArea:this.roomArea,
      possessionStartDate:this.possessionStartDate,
      societywingID: this.societywingID,
      roomID: this.roomID
    });
  }
  
  addMember()
  {
    
    if(this.createSoicetyMemeberForm.valid)
    {
      this.societymasterservice.pushSocietyMember(this.createSoicetyMemeberForm.value);

      this.dialogRef.close();
    }
    
  }

  populateWingRooms()
  {    
    this.societymasterservice.getRoomList(1,this.societywingID.value).subscribe(res => {this.roomList = res,console.log(res)});
  }

 
}
