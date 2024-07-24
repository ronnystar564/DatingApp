import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule, ToastrService, provideToastr } from 'ngx-toastr';
import { toUSVString } from 'util';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch()), provideToastr({
    timeOut: 3000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,
  })]
};
