import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { SocietymasterserviceService } from '../societymasterservice.service';


@Component({
  selector: 'societyheader',
  templateUrl: './societyheader.component.html',  
  styleUrls: ['./societyheader.component.css']
})
export class SocietyheaderComponent implements OnInit {

  constructor(private societyMasterService: SocietymasterserviceService) { }
  menuList:any;
  ngOnInit() {
    this.societyMasterService.getAppMenuList().subscribe(res => {this.menuList = res, console.log(this.menuList)});
  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    //this.societyMasterService.getAppMenuList().subscribe(res => {this.menuList = res, console.log(this.menuList)});
  }



}
