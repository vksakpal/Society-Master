import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'childmenu',
  templateUrl: './childmenu.component.html',
  styleUrls: ['./childmenu.component.css']
})
export class ChildmenuComponent implements OnInit {

  parentmenu:string;
  childmenuitems:any;

  constructor(parentmenu, childmenuitems) {
    this.parentmenu = parentmenu;
    this.childmenuitems = childmenuitems;
   }

  ngOnInit() {
  }

}
