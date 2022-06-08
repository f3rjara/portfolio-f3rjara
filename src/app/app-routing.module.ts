import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* Import of components for routing */
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./portfolio/portfolio.module').then( m =>  m.PortfolioModule )
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
