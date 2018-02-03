import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SocietyheaderComponent } from './societyheader/societyheader.component';
import { SocietymasterserviceService } from './societymasterservice.service';
import { HttpModule } from '@angular/http';
import { MatToolbarModule }  from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatIconModule }  from '@angular/material/icon';

import { SocietymembersComponent } from './societymembers/societymembers.component';
import { SocietymaintenanceComponent } from './societymaintenance/societymaintenance.component';
import { TenantdetailsComponent } from './tenantdetails/tenantdetails.component';
import { EmergencyServicesComponent } from './emergency-services/emergency-services.component';
import { ChildmenuComponent } from './childmenu/childmenu.component';

const Routes =[{
  path: '',
  component:SocietymembersComponent      
},
{
  path: 'societymembers',
  component:SocietymembersComponent      
},
{
  path:'societymaintenance',
  component: SocietymaintenanceComponent
},
{
  path:'tenantdetails',
  component:TenantdetailsComponent
},
{
  path:'emergencyservices',
  component:EmergencyServicesComponent
},
];


@NgModule({
  declarations: [
    AppComponent,
    SocietyheaderComponent,
    SocietymembersComponent,
    SocietymaintenanceComponent,
    TenantdetailsComponent,
    EmergencyServicesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule.forRoot(Routes     
)
  ],
  providers: [
    SocietymasterserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

