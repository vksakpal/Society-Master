import { Component, OnInit } from '@angular/core';
import { SocietyMembers } from '../../models/societymembers';
import { SocietymasterserviceService } from '../societymasterservice.service';
import { MatTableDataSource, MatDialog,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreatesocietymemberComponent } from '../createsocietymember/createsocietymember.component';

@Component({
  selector: 'app-societymembers',
  templateUrl: './societymembers.component.html',
  styleUrls: ['./societymembers.component.css']
})
export class SocietymembersComponent implements OnInit {

 societyMemberList:MatTableDataSource<SocietyMembers> = new MatTableDataSource<SocietyMembers>();

 societyMembersGridColumns = ['RoomID','Name','PhoneNumber','GenderDescription','RoomArea','PossessionStartDate','IsRented'];

  constructor(private societymasterservice:SocietymasterserviceService,public dialog:MatDialog) {

  }

 

  ngOnInit() {
    this.refreshMembers();
  }  
 
  openCreateSocietyMember()
  {
    let dialogRef = this.dialog.open(CreatesocietymemberComponent,{
      height: '700px',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(res => {      
      this.refreshMembers();
    });
  }

  refreshMembers()
  {
    
    this.societymasterservice.getSocietyMembersList().subscribe(
      res => {
        this.societyMemberList = new MatTableDataSource<SocietyMembers>(res)
      }
    ) 
  }
}
