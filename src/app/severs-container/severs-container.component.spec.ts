import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeversContainerComponent } from './severs-container.component';

describe('SeversContainerComponent', () => {
  let component: SeversContainerComponent;
  let fixture: ComponentFixture<SeversContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeversContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeversContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
