import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('popupCreate')popupCreate!:ElementRef
  @ViewChild('toastCopy')toastCopy!:ElementRef

  title = 'password_manager';
  formGroup: FormGroup;

  password = '';
  name = '' ;
  userName = '' ;
  id = 0 ;

  passwordsArr = [
    {id : 1, name: 'Steam', password: '07oOMv^@Dn' , userName : 'hamun_yt' },
    {id : 2, name: 'Activision', password: 'hbMmwG3gLnh5' , userName : 'said.elatik.603@gmail.com' }
  ]

  constructor(
    private formBuilder: FormBuilder ,
    @Inject(DOCUMENT) private document: Document,
  ){
    this.formGroup = this.formBuilder.group({
      id : [this.id , Validators.required],
      name: [this.name , Validators.required],
      password: [this.password , Validators.required],
      userName : [this.password , Validators.required],
    });
  }

  create(){
    console.log(this.formGroup.value);
  }

  openCreatePass(){
    this.document.querySelector('body')?.classList.add('overflow-hidden');
    this.popupCreate.nativeElement.classList.remove('hidden');
    setTimeout(() => this.popupCreate.nativeElement.classList.remove('opacity-0') , 200)
  }
  closeCreatePass(){
    this.document.querySelector('body')?.classList.remove('overflow-hidden');
    this.popupCreate.nativeElement.classList.add('opacity-0')
    setTimeout(() => this.popupCreate.nativeElement.classList.add('hidden') , 200)
  }
  openCopied(){
    this.toastCopy.nativeElement.classList.remove('hidden');
    setTimeout(() => this.toastCopy.nativeElement.classList.remove('opacity-0') , 200)
    setTimeout(() => this.closeCopied() , 1500)
  }
  closeCopied(){
    this.toastCopy.nativeElement.classList.add('opacity-0')
    setTimeout(() => this.toastCopy.nativeElement.classList.add('hidden') , 200)
  }
  
  editPassword(password : any , name : any, userName : any , id : any){
    this.password = password;
    this.name = name;
    this.id = id;
    this.userName = userName;

    this.formGroup.controls["password"].setValue(this.password);
    this.formGroup.controls["name"].setValue(this.name);
    this.formGroup.controls["id"].setValue(this.id);
    this.formGroup.controls["userName"].setValue(this.userName);


    this.openCreatePass()
  }

  copyToClipboard(copy : any){
    navigator.clipboard.writeText(copy);
    this.openCopied()
  }

}
