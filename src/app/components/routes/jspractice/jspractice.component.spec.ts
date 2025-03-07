import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JSPracticeComponent } from './jspractice.component';

describe('JSPracticeComponent', () => {
  let component: JSPracticeComponent;
  let fixture: ComponentFixture<JSPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JSPracticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JSPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
