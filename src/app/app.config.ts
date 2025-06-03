import {provideHttpClient} from '@angular/common/http';
import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideRouter, withInMemoryScrolling} from '@angular/router';
import {OWL_DATE_TIME_LOCALE} from '@danielmoncada/angular-datetime-picker';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {provideToastr} from 'ngx-toastr';
import {routes} from './app.routes';


export const appConfig: ApplicationConfig = {
    providers: [
        {provide: OWL_DATE_TIME_LOCALE, useValue: 'en'},
        provideAnimations(),
        provideToastr(),
        provideRouter(routes, withInMemoryScrolling({
            scrollPositionRestoration: "top",
        })),
        provideZoneChangeDetection({eventCoalescing: true}),
        provideHttpClient(),
        provideRouter(routes),
        importProvidersFrom(
            CalendarModule.forRoot({
                provide: DateAdapter,
                useFactory: adapterFactory,
            })
        )
    ]
};
