import { Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { LoaderComponent } from './common/loader/loader.component';

export const routes: Routes = [
   {
    path: 'loader',
    component: LoaderComponent
  },
  { path: 'loader', component: LoaderComponent }

];
