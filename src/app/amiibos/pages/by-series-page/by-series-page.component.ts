import { Component } from '@angular/core';
import { Amiibo } from '../../interfaces/amiibo';
import { AmiibosService } from '../../services/amiibos.service';

@Component({
  selector: 'app-by-series-page',
  templateUrl: './by-series-page.component.html',
  styleUrl: './by-series-page.component.css',
})
export class BySeriesPageComponent {
  public amiibos: Amiibo[] = [];
  public hasSearched = false;

  constructor(private amiibosService: AmiibosService) {}

  searchByAmiiboSeries(query: string): void {
    this.amiibosService.searchByAmiiboSeries(query).subscribe((amiibos) => {
      this.amiibos = amiibos;
      this.hasSearched = true;
    });
  }
}
