import { Component, OnInit } from '@angular/core';
import { Amiibo } from '../../interfaces/amiibo';
import { AmiibosService } from '../../services/amiibos.service';

@Component({
  selector: 'app-by-name-page',
  templateUrl: './by-name-page.component.html',
  styleUrl: './by-name-page.component.css',
})
export class ByNamePageComponent implements OnInit {
  public amiibos: Amiibo[] = [];
  public hasSearched = false;
  public searchBoxValue = '';

  constructor(private amiibosService: AmiibosService) {}

  ngOnInit(): void {
    this.amiibos = this.amiibosService.storedSearch.byCharacterName.amiibos;
    this.searchBoxValue = this.amiibosService.storedSearch.byCharacterName.term;

    if (this.searchBoxValue != '') {
      this.hasSearched = true;
    }
  }

  searchByName(query: string): void {
    this.amiibosService.searchByName(query).subscribe((amiibos) => {
      this.amiibos = amiibos;
      this.hasSearched = true;
    });
  }
}
