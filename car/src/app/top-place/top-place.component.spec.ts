import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPlaceComponent } from './top-place.component';

describe('TopPlaceComponent', () => {
  let component: TopPlaceComponent;
  let fixture: ComponentFixture<TopPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
