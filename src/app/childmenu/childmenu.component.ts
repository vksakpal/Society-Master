import { Component, OnInit, Input,ViewChild } from '@angular/core';
import { appmenu } from '../../models/appmenu';


@Component({
  selector: 'childmenu',
  templateUrl: './childmenu.component.html',
  styleUrls: ['./childmenu.component.css']
})
export class ChildmenuComponent implements OnInit {

 

  @Input() items: appmenu[];
  @ViewChild('childmenu1') public childmenu1;

  constructor() {
    
   }

  ngOnInit() {
  }

}
