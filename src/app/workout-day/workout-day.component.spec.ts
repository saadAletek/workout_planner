import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutDayComponent } from './workout-day.component';

describe('WorkoutDayComponent', () => {
  let component: WorkoutDayComponent;
  let fixture: ComponentFixture<WorkoutDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutDayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
