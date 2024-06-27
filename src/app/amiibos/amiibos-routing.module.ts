import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmiiboPageComponent } from './pages/amiibo-page/amiibo-page.component';
import { ByGameFranchisePageComponent } from './pages/by-game-franchise-page/by-game-franchise-page.component';
import { ByNamePageComponent } from './pages/by-name-page/by-name-page.component';
import { BySeriesPageComponent } from './pages/by-series-page/by-series-page.component';

const routes: Routes = [
  {
    path: 'by-name',
    component: ByNamePageComponent,
  },
  {
    path: 'by-series',
    component: BySeriesPageComponent,
  },
  {
    path: 'by-game-franchise',
    component: ByGameFranchisePageComponent,
  },
  {
    path: 'by/:tailCode',
    component: AmiiboPageComponent,
  },
  {
    path: '**',
    redirectTo: 'by-name',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmiibosRoutingModule {}
