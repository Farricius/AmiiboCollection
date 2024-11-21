import { Component, OnInit } from '@angular/core';
import { Amiibo } from '../../interfaces/amiibo';
import { AmiibosService } from '../../services/amiibos.service';

@Component({
  selector: 'app-by-game-franchise-page',
  templateUrl: './by-game-franchise-page.component.html',
  styleUrl: './by-game-franchise-page.component.css',
})
export class ByGameFranchisePageComponent implements OnInit {
  public amiibos: Amiibo[] = [];
  public hasSearched = false;
  public searchBoxValue = '';

  constructor(private amiibosService: AmiibosService) {}

  ngOnInit(): void {
    this.amiibos = this.amiibosService.storedSearch.byGameFranchise.amiibos;
    this.searchBoxValue = this.amiibosService.storedSearch.byGameFranchise.term;

    if (this.searchBoxValue != '') {
      this.hasSearched = true;
    }
  }

  searchByGameFranchise(query: string): void {
    this.amiibosService.searchByGameFranchise(query).subscribe((amiibos) => {
      this.amiibos = amiibos;
      this.hasSearched = true;
    });
  }
}
