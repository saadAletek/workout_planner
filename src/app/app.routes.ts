import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {
        path : '',
        component : HomeComponent
    },
    {
        path : 'settings',
        component : SettingsComponent
    },
    {
        path : 'signin',
        component : SigninComponent
    },
    {
        path : 'signup',
        component : SignupComponent
    }
];
