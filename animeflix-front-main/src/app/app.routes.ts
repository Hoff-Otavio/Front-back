import { Routes } from '@angular/router';
import { AnimeEditComponent } from '@pages/anime/anime-edit/anime-edit.component';
import { HomeComponent } from '@pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'anime-edit/:id', component: AnimeEditComponent },
];
