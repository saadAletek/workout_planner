import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-workout-day',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './workout-day.component.html',
  styleUrl: './workout-day.component.scss'
})
export class WorkoutDayComponent {
  levelId: any

  activeWorkout : any = []
  dayName : any
  temp : any
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.levelId = params.get('id')

      if (this.levelId % 2 === 0){
        this.temp = 0
        this.dayName = 'Chest Day'
      }else {
        this.temp = 1
        this.dayName = 'Back Day'
      }
      this.activeWorkout = this.workoutPlan[this.temp]

      console.log(this.activeWorkout)
    });
  }

  workoutPlan = [
    [
      {
        muscle : 'Chest',
        workouts : [
          {
            name : 'Incline Chest Press',
            reps : 1,
            sets : 2
          },
          {
            name : 'Chest Press',
            reps : 1,
            sets : 2
          },
          {
            name : 'Pech Deck',
            reps : 2,
            sets : 1
          }
        ]
      },
      {
        muscle : 'Shoulder',
        workouts : [
          {
            name : 'Shoulder Press Machine',
            reps : 1,
            sets : 2
          },
          {
            name : 'Cable Latiral Raises',
            reps : 2,
            sets : 1
          },
          {
            name : 'Upright Row',
            reps : 2,
            sets : 1
          },
        ]
      },
      {
        muscle : 'Tricep',
        workouts : [
          {
            name : 'Overhead Tricep ext.',
            reps : 2,
            sets : 1
          },
          {
            name : 'Cable Skull Crushers',
            reps : 2,
            sets : 1
          }
        ]
      },
      {
        muscle : 'Forearm',
        workouts : [
          {
            name : 'Hammer Curls',
            reps : 2,
            sets : 1
          },
          {
            name : 'Wrist Curls',
            reps : 2,
            sets : 1
          },
          {
            name : 'Reverse Wrist Curls',
            reps : 2,
            sets : 1
          },
        ]
      }
    ],
    [
      {
        muscle : 'Back',
        workouts : [
          {
            name : 'Wide Pulldown',
            reps : 2,
            sets : 1
          },
          {
            name : 'Reverse Pulldown',
            reps : 2,
            sets : 1
          },
          {
            name : 'Triangle Pulldown',
            reps : 2,
            sets : 1
          },
        ]
      },
      {
        muscle : 'Biceps',
        workouts : [
          {
            name : 'Cable Bicep Curls',
            reps : 2,
            sets : 1
          },
          {
            name : 'Barbell Curls',
            reps : 2,
            sets : 1
          },
        ]
      },
      {
        muscle : 'Abs',
        workouts : [
          {
            name : 'Dragon flies',
            reps : 2,
            sets : 1
          },
          {
            name : 'Decline Crunch',
            reps : 2,
            sets : 1
          },
        ]
      },
      {
        muscle : 'Forearm',
        workouts : [
          {
            name : 'Hammer Curls',
            reps : 2,
            sets : 1
          },
          {
            name : 'Wrist Curls',
            reps : 2,
            sets : 1
          },
          {
            name : 'Reverse Wrist Curls',
            reps : 2,
            sets : 1
          },
        ]
      }
    ]
  ]


}
