import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('accountSettings')accountSettings!:ElementRef
  isAccountSettingsOpen = false

  toggleAccount(){
    if(this.isAccountSettingsOpen){
      this.closeAccountSettings()
    }else{
      this.openAccountSettings()
    }
  }

  openAccountSettings(){
    this.isAccountSettingsOpen = true
    this.accountSettings.nativeElement.classList.remove('hidden');
    setTimeout(() => this.accountSettings.nativeElement.classList.remove('opacity-0') , 200)
  }
  closeAccountSettings(){
    this.isAccountSettingsOpen = false
    this.accountSettings.nativeElement.classList.add('opacity-0')
    setTimeout(() => this.accountSettings.nativeElement.classList.add('hidden') , 200)
  }

}
