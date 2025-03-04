import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LevelsComponent } from './levels/levels.component';
import { WorkoutDayComponent } from './workout-day/workout-day.component';

export const routes: Routes = [
    {
        path : 'a',
        component : HomeComponent
    },
    {
        path : '',
        component : LevelsComponent
    },
    {
        path : 'levels/:id',
        component : WorkoutDayComponent
    },
];
