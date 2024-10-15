import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  @ViewChild('passwordPopup')passwordPopup!:ElementRef
  @ViewChild('toastCopy')toastCopy!:ElementRef

  formGroup: FormGroup;

  password = '';
  name = '' ;
  userName = '' ;
  id = 0 ;

  isNew : any

  //true = grid   false = list
  displayFormat = true


  passwordsArr = [
    {id : 1, name: 'Steam', password: '07oOMv^@Dn' , userName : 'hamun_yt' },
    {id : 2, name: 'Activision', password: 'hbMmwG3gLnh5' , userName : 'said.elatik.603@gmail.com' },
    {id : 3, name: 'Activision2', password: 'hbMmwG3gLnh52' , userName : 'said.elatik.603@gmail.com2' },
    {id : 1, name: 'Steam', password: '07oOMv^@Dn' , userName : 'hamun_yt' },
    {id : 2, name: 'Activision', password: 'hbMmwG3gLnh5' , userName : 'said.elatik.603@gmail.com' },
    {id : 3, name: 'Activision2', password: 'hbMmwG3gLnh52' , userName : 'said.elatik.603@gmail.com2' },
    {id : 1, name: 'Steam', password: '07oOMv^@Dn' , userName : 'hamun_yt' },
    {id : 2, name: 'Activision', password: 'hbMmwG3gLnh5' , userName : 'said.elatik.603@gmail.com' },
    {id : 3, name: 'Activision2', password: 'hbMmwG3gLnh52' , userName : 'said.elatik.603@gmail.com2' },
    {id : 1, name: 'Steam', password: '07oOMv^@Dn' , userName : 'hamun_yt' },
    {id : 2, name: 'Activision', password: 'hbMmwG3gLnh5' , userName : 'said.elatik.603@gmail.com' },
    {id : 3, name: 'Activision2', password: 'hbMmwG3gLnh52' , userName : 'said.elatik.603@gmail.com2' },
    {id : 1, name: 'Steam', password: '07oOMv^@Dn' , userName : 'hamun_yt' },
    {id : 2, name: 'Activision', password: 'hbMmwG3gLnh5' , userName : 'said.elatik.603@gmail.com' },
    {id : 3, name: 'Activision2', password: 'hbMmwG3gLnh52' , userName : 'said.elatik.603@gmail.com2' },
  ]

  constructor(
    private formBuilder: FormBuilder ,
    @Inject(DOCUMENT) private document: Document,
  ){
    this.formGroup = this.formBuilder.group({
      id : [this.id , Validators.required],
      name: [this.name , Validators.required],
      password: [this.password , Validators.required],
      userName : [this.userName , Validators.required],
    });
  }


  onSubmit() {

  }

  changeDisplayFormat(b : boolean){
    this.displayFormat = b

  }

  create(){
    console.log(this.formGroup.value);
  }

  openPasswordPopup(isnew:boolean){
    this.isNew = isnew

    if(this.isNew){
      this.formGroup.patchValue({
        password: '',
        name: '',
        id: 0,
        userName: ''
      });
    }

    this.document.querySelector('body')?.classList.add('overflow-hidden');
    this.passwordPopup.nativeElement.classList.remove('hidden');
    setTimeout(() => this.passwordPopup.nativeElement.classList.remove('opacity-0') , 200)
  }
  closePasswordPopup(){
    this.document.querySelector('body')?.classList.remove('overflow-hidden');
    this.passwordPopup.nativeElement.classList.add('opacity-0')
    setTimeout(() => this.passwordPopup.nativeElement.classList.add('hidden') , 200)
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





  

  editPassword(password: string, name: string, userName: string, id: number) {
    this.formGroup.patchValue({
      password: password,
      name: name,
      id: id,
      userName: userName
    });
  
    this.openPasswordPopup(false);
  }

  copyToClipboard(copy : any){
    navigator.clipboard.writeText(copy);
    this.openCopied()
  }

}
