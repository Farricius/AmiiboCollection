import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators'; // Import map operator
import { Amiibo } from '../interfaces/amiibo';

@Injectable({
  providedIn: 'root',
})
export class AmiibosService {
  private baseUrl: string = 'https://www.amiiboapi.com/api/';

  constructor(private http: HttpClient) {}

  searchByName(term: string): Observable<Amiibo[]> {
    const url = `${this.baseUrl}amiibo/?name=${term}&type=figure`;
    return this.http
      .get<{ amiibo: Amiibo[] }>(url)
      .pipe(map((response) => response.amiibo));
  }

  searchByAmiiboSeries(term: string): Observable<Amiibo[]> {
    const url = `${this.baseUrl}amiibo/?amiiboSeries=${term}&type=figure`;
    return this.http
      .get<{ amiibo: Amiibo[] }>(url)
      .pipe(map((response) => response.amiibo));
  }

  searchByGameFranchise(term: string): Observable<Amiibo[]> {
    const url = `${this.baseUrl}amiibo/?gameseries=${term}&type=figure`;
    return this.http
      .get<{ amiibo: Amiibo[] }>(url)
      .pipe(map((response) => response.amiibo));
  }

  searchAmiiboByHead(tailCode: string): Observable<Amiibo | null> {
    const url = `${this.baseUrl}amiibo/?tail=${tailCode}&type=figure`;
    return this.http.get<{ amiibo: Amiibo[] }>(url).pipe(
      map((response) => {
        const amiibos = response.amiibo;
        return amiibos.length > 0 ? amiibos[0] : null;
      }),
      catchError(() => of(null))
    );
  }
}
