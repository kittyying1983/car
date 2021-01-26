import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarContentComponent } from './car-content.component';

describe('CarContentComponent', () => {
  let component: CarContentComponent;
  let fixture: ComponentFixture<CarContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
