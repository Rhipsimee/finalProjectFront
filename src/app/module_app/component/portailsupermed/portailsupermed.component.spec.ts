import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortailsupermedComponent } from './portailsupermed.component';

describe('PortailsupermedComponent', () => {
  let component: PortailsupermedComponent;
  let fixture: ComponentFixture<PortailsupermedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortailsupermedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortailsupermedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
