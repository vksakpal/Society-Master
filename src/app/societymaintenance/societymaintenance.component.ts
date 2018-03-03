import { Component, OnInit } from '@angular/core';
import { SocietymasterserviceService } from '../societymasterservice.service';

@Component({
  selector: 'app-societymaintenance',
  templateUrl: './societymaintenance.component.html',
  styleUrls: ['./societymaintenance.component.css'],
  providers:[SocietymasterserviceService]
})
export class SocietymaintenanceComponent implements OnInit {

  constructor(private service: SocietymasterserviceService) { }

  ngOnInit() {
  }

}
