import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexpatientComponent } from './indexpatient.component';

describe('IndexpatientComponent', () => {
  let component: IndexpatientComponent;
  let fixture: ComponentFixture<IndexpatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexpatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
