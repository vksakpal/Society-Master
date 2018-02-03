import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildmenuComponent } from './childmenu.component';

describe('ChildmenuComponent', () => {
  let component: ChildmenuComponent;
  let fixture: ComponentFixture<ChildmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
