import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodilityComponent } from './codility.component';

describe('CodilityComponent', () => {
  let component: CodilityComponent;
  let fixture: ComponentFixture<CodilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
