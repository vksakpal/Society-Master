import { Component, OnInit } from '@angular/core';
import { SocietymasterserviceService } from '../societymasterservice.service';

@Component({
  selector: 'societyheader',
  //templateUrl: './societyheader.component.html',
  template: 
  `<mat-toolbar color="primary"><mat-toolbar-row><a mat-button routerLink='' class="homelink">
      <mat-icon>home</mat-icon>
      Society Master
    </a>
    <a mat-button  *ngFor="let menu of menuList" routerLink='{{menu.routepath}}'>{{menu.menudescription}}      
    </a>
    </mat-toolbar-row>
  </mat-toolbar>`,
  styleUrls: ['./societyheader.component.css']
})
export class SocietyheaderComponent implements OnInit {

  constructor(private societyMasterService: SocietymasterserviceService) { }
  menuList:any;
  ngOnInit() {
    this.societyMasterService.getAppMenuList().subscribe(res => this.menuList = res);
  }



}
