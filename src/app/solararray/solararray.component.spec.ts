import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolararrayComponent } from './solararray.component';

describe('SolararrayComponent', () => {
  let component: SolararrayComponent;
  let fixture: ComponentFixture<SolararrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolararrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolararrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
