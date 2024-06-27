import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   component: HomePageComponent,
  // },
  // {
  //   path: 'about',
  //   component: AboutPageComponent,
  // },
  // {
  //   path: 'about',
  //   component: AboutPageComponent,
  // },

  {
    path: 'amiibos',
    loadChildren: () =>
      import('./amiibos/amiibos.module').then((m) => m.AmiibosModule),
  },

  {
    path: '**',
    redirectTo: 'amiibos',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
