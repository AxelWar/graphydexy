//main.ts

import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { GraphQLModule } from './app/shared/graphql/graphql.module';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule, GraphQLModule),
    provideRouter(routes),
  ],
});
