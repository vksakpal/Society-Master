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
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule }  from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';

import { SocietymembersComponent } from './societymembers/societymembers.component';
import { SocietymaintenanceComponent } from './societymaintenance/societymaintenance.component';
import { TenantdetailsComponent } from './tenantdetails/tenantdetails.component';
import { EmergencyServicesComponent } from './emergency-services/emergency-services.component';
import { ChildmenuComponent } from './childmenu/childmenu.component';
import { AstPath } from '@angular/compiler';
import { CreatesocietymemberComponent } from './createsocietymember/createsocietymember.component';

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
{
  path:'addtenant',
  component:TenantdetailsComponent
},
{
  path:'addsocietymember',
  component:SocietymembersComponent
}
];


@NgModule({
  declarations: [
    AppComponent,
    SocietyheaderComponent,
    SocietymembersComponent,
    SocietymaintenanceComponent,
    TenantdetailsComponent,
    EmergencyServicesComponent,
    ChildmenuComponent,
    CreatesocietymemberComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forRoot(Routes     
)
  ],
  providers: [   
    SocietymasterserviceService 
  ],
  bootstrap: [AppComponent],
  entryComponents:[
    CreatesocietymemberComponent
  ]

})
export class AppModule { }

