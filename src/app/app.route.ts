import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoaderComponent } from './common/loader/loader.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
   {
    path: 'loader',
    component: LoaderComponent
  },
  { path: 'home', component: HomeComponent }

];
