import { Routes } from '@angular/router';
import { CursoListComponent } from './components/curso-list/curso-list.component';
import { CursoDetailComponent } from './components/curso-detail/curso-detail.component';

export const routes: Routes = [
  { path: '', component: CursoListComponent },
  { path: 'curso/:id', component: CursoDetailComponent },
];
