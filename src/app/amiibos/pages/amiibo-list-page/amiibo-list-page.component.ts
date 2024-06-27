import { Component, Input } from '@angular/core';
import { Amiibo } from '../../interfaces/amiibo';

@Component({
  selector: 'app-amiibo-list-page',
  templateUrl: './amiibo-list-page.component.html',
  styleUrl: './amiibo-list-page.component.css',
})
export class AmiiboListPageComponent {
  @Input() amiibos!: Amiibo[];
  @Input() hasSearched: boolean = false;
}
