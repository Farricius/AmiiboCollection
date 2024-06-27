import { Component } from '@angular/core';
import { Amiibo } from '../../interfaces/amiibo';
import { AmiibosService } from '../../services/amiibos.service';

@Component({
  selector: 'app-by-game-franchise-page',
  templateUrl: './by-game-franchise-page.component.html',
  styleUrl: './by-game-franchise-page.component.css',
})
export class ByGameFranchisePageComponent {
  public amiibos: Amiibo[] = [];
  public hasSearched = false;

  constructor(private amiibosService: AmiibosService) {}

  searchByGameFranchise(query: string): void {
    this.amiibosService.searchByGameFranchise(query).subscribe((amiibos) => {
      this.amiibos = amiibos;
      this.hasSearched = true;
    });
  }
}
