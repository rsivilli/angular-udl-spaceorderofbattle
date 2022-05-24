import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrusterComponent } from './thruster.component';

describe('ThrusterComponent', () => {
  let component: ThrusterComponent;
  let fixture: ComponentFixture<ThrusterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThrusterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
