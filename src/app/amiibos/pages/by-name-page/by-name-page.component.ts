import { Component } from '@angular/core';
import { Amiibo } from '../../interfaces/amiibo';
import { AmiibosService } from '../../services/amiibos.service';

@Component({
  selector: 'app-by-name-page',
  templateUrl: './by-name-page.component.html',
  styleUrl: './by-name-page.component.css',
})
export class ByNamePageComponent {
  public amiibos: Amiibo[] = [];
  public hasSearched = false;

  constructor(private amiibosService: AmiibosService) {}

  searchByName(query: string): void {
    this.amiibosService.searchByName(query).subscribe((amiibos) => {
      this.amiibos = amiibos;
      this.hasSearched = true;
    });
  }
}
