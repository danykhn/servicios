import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';


export const appConfig: ApplicationConfig = {
  providers: [    
    importProvidersFrom(HttpClientModule),
    provideRouter(routes), 
    provideAnimations(), provideAnimationsAsync()
  ]
};