import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortailcollabComponent } from './portailcollab.component';

describe('PortailcollabComponent', () => {
  let component: PortailcollabComponent;
  let fixture: ComponentFixture<PortailcollabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortailcollabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortailcollabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
