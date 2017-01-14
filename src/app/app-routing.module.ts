import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoContentComponent } from './no-content/no-content.component';
import { PreloadSelectedModulesList } from './core/preload-selected-modules-list';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'home',
    loadChildren: 'app/home/home.module#HomeModule'
  },
  {
    path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: '**',
    component: NoContentComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      { preloadingStrategy: PreloadSelectedModulesList }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    PreloadSelectedModulesList
  ]
})
export class AppRoutingModule { }
