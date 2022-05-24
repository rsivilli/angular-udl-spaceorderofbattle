import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlevisualizerComponent } from './tlevisualizer.component';

describe('TlevisualizerComponent', () => {
  let component: TlevisualizerComponent;
  let fixture: ComponentFixture<TlevisualizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlevisualizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlevisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
