import { Component, OnInit } from '@angular/core';
import { Amiibo } from '../../interfaces/amiibo';
import { AmiibosService } from '../../services/amiibos.service';

@Component({
  selector: 'app-by-series-page',
  templateUrl: './by-series-page.component.html',
  styleUrl: './by-series-page.component.css',
})
export class BySeriesPageComponent implements OnInit {
  public amiibos: Amiibo[] = [];
  public hasSearched = false;
  public searchBoxValue = '';

  constructor(private amiibosService: AmiibosService) {}

  ngOnInit(): void {
    this.amiibos = this.amiibosService.storedSearch.byAmiiboSeries.amiibos;
    this.searchBoxValue = this.amiibosService.storedSearch.byAmiiboSeries.term;

    if (this.searchBoxValue != '') {
      this.hasSearched = true;
    }
  }

  searchByAmiiboSeries(query: string): void {
    this.amiibosService.searchByAmiiboSeries(query).subscribe((amiibos) => {
      this.amiibos = amiibos;
      this.hasSearched = true;
    });
  }
}
