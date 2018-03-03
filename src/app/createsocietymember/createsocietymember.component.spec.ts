import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesocietymemberComponent } from './createsocietymember.component';

describe('CreatesocietymemberComponent', () => {
  let component: CreatesocietymemberComponent;
  let fixture: ComponentFixture<CreatesocietymemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesocietymemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesocietymemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
