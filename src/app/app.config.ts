import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter,  withInMemoryScrolling,  withViewTransitions ,withHashLocation} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay, } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,withHashLocation(),withViewTransitions()), 
    provideClientHydration(withEventReplay()),
    ]
};
