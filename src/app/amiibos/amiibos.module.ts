import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AmiibosRoutingModule } from './amiibos-routing.module';
import { AmiiboListPageComponent } from './pages/amiibo-list-page/amiibo-list-page.component';
import { ByGameFranchisePageComponent } from './pages/by-game-franchise-page/by-game-franchise-page.component';
import { ByNamePageComponent } from './pages/by-name-page/by-name-page.component';
import { BySeriesPageComponent } from './pages/by-series-page/by-series-page.component';
import { AmiiboPageComponent } from './pages/amiibo-page/amiibo-page.component';

@NgModule({
  declarations: [
    ByNamePageComponent,
    BySeriesPageComponent,
    ByGameFranchisePageComponent,
    AmiiboListPageComponent,
    AmiiboPageComponent,
  ],
  imports: [CommonModule, AmiibosRoutingModule, SharedModule],
})
export class AmiibosModule {}
