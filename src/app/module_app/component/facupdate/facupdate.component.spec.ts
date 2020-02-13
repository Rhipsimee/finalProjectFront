import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacupdateComponent } from './facupdate.component';

describe('FacupdateComponent', () => {
  let component: FacupdateComponent;
  let fixture: ComponentFixture<FacupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
