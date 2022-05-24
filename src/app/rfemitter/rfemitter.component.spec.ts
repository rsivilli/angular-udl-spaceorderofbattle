import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfemitterComponent } from './rfemitter.component';

describe('RfemitterComponent', () => {
  let component: RfemitterComponent;
  let fixture: ComponentFixture<RfemitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfemitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfemitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
