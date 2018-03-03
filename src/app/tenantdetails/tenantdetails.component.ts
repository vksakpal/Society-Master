import { Component, OnInit } from '@angular/core';
import { SocietymasterserviceService } from '../societymasterservice.service';


@Component({
  selector: 'app-tenantdetails',
  templateUrl: './tenantdetails.component.html',
  styleUrls: ['./tenantdetails.component.css'],
  providers:[SocietymasterserviceService]
})
export class TenantdetailsComponent implements OnInit {

  constructor(private service:SocietymasterserviceService) { }

  ngOnInit() {
  }

}
