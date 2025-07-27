import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';

import { errorsInterceptor } from '../core/interceptors/errors/errors.interceptor';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
import { loagingInterceptor } from '../core/interceptors/loading/loaging.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes,withViewTransitions(),
    withInMemoryScrolling({scrollPositionRestoration:'top'}),//ywdeny awl el sf7ah
  withHashLocation(),
    ), 
     provideClientHydration(withEventReplay()),
     provideHttpClient(withFetch(), withInterceptors([errorsInterceptor,loagingInterceptor])),//3ashan el httpclint el api
       provideAnimations(), // required animations providers
    provideToastr(),
    importProvidersFrom(BrowserAnimationsModule,
    NgxSpinnerModule,), // Toastr providers
      ]
};
