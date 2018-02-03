import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietymembersComponent } from './societymembers.component';

describe('SocietymembersComponent', () => {
  let component: SocietymembersComponent;
  let fixture: ComponentFixture<SocietymembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocietymembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietymembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
