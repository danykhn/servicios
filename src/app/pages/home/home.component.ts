import { Component, HostListener } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

  deviceInfo : any = null;
  showModal: boolean = false;
  showSpanMobile: boolean = false;

  constructor(
    private http: HttpClient, private deviceService: DeviceDetectorService) {
    this.epicFunction();
  }

  epicFunction() {
    console.log('hello `Home` component');
    this.deviceInfo = this.deviceService.getDeviceInfo();
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    const isDesktopDevice = this.deviceService.isDesktop();
    console.log(this.deviceInfo);
    console.log(isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
    console.log(isTablet);  // returns if the device us a tablet (iPad etc)
    console.log(isDesktopDevice); // returns if the app is running on a Desktop browser.

    if (isMobile) {
        this.showModal = true
    } else {
      
    }
  }

  toggleModal(){
    this.showModal = false
  }

   // Método para evitar que se cierre el modal al hacer clic dentro de él
   stopPropagation(event: Event) {
    event.stopPropagation();
  }

  // Método para cerrar el modal si se presiona la tecla "Esc"
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.showModal = false;
    this.showSpanMobile = true
  }
}
