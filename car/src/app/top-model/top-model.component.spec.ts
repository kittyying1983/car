import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopModelComponent } from './top-model.component';

describe('TopModelComponent', () => {
  let component: TopModelComponent;
  let fixture: ComponentFixture<TopModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
