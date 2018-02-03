import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyheaderComponent } from './societyheader.component';

describe('SocietyheaderComponent', () => {
  let component: SocietyheaderComponent;
  let fixture: ComponentFixture<SocietyheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocietyheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
