import { ApplicationConfig, Provider } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { routes } from './app.routes';
import { HttpInterceptorService } from './http-interceptor.service';


export const httpInterceptorProvider: Provider =
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true };

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(HttpClientModule), httpInterceptorProvider]
};
