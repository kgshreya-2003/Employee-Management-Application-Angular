import { bootstrapApplication } from '@angular/platform-browser';
import { App, routes } from './app/app';  // <-- Now routes are exported here
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
});
