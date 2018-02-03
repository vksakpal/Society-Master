import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietymaintenanceComponent } from './societymaintenance.component';

describe('SocietymaintenanceComponent', () => {
  let component: SocietymaintenanceComponent;
  let fixture: ComponentFixture<SocietymaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocietymaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietymaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
