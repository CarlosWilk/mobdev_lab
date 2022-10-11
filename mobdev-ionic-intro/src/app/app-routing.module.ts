import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)},
  {
    path: 'person-details-page',
    loadChildren: () => import('./pages/person-details-page/person-details-page.module').then( m => m.PersonDetailsPagePageModule)
  },
  {
    path: 'planet-details-page',
    loadChildren: () => import('./pages/planet-details-page/planet-details-page.module').then( m => m.PlanetDetailsPagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
