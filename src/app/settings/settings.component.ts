import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [RouterModule , ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

  formGroup: FormGroup;

  firstName = 'Saad' ;
  lastName = 'Aletek' ;
  password = 'Qwerty123';
  imageURL = 'imgs/Avatar.png' ;
  
  constructor(
    private formBuilder: FormBuilder ,
  ){
    this.formGroup = this.formBuilder.group({
      firstName : [this.firstName , Validators.required],
      lastName: [this.lastName , Validators.required],
      password: [this.password , Validators.required],
      imageURL : [this.imageURL , Validators.required],
    });
  }


  onSubmit() {

  }

}
