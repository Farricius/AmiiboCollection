import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Amiibo } from '../../interfaces/amiibo';
import { AmiibosService } from '../../services/amiibos.service';

@Component({
  selector: 'app-amiibo-page',
  templateUrl: './amiibo-page.component.html',
  styleUrl: './amiibo-page.component.css',
})
export class AmiiboPageComponent {
  public amiibo?: Amiibo;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private amiibosService: AmiibosService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ tailCode }) =>
          this.amiibosService.searchAmiiboByHead(tailCode)
        )
      )
      .subscribe((amiibo) => {
        if (!amiibo) return this.router.navigateByUrl('');
        return (this.amiibo = amiibo);
      });
  }
}

// ngOnInit(): void {

//   this.activatedRoute.params
//     .pipe(
//       switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode( id )),
//     )
//     .subscribe( country => {
//       if ( !country ) return this.router.navigateByUrl('');
//       return this.country = country;
//     });
// }
