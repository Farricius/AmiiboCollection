import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Amiibo } from '../interfaces/amiibo';

interface CacheEntry {
  term: string;
  amiibos: Amiibo[];
}

@Injectable({
  providedIn: 'root',
})
export class AmiibosService {
  private baseUrl: string = 'https://www.amiiboapi.com/api/';

  public storedSearch: {
    byCharacterName: CacheEntry;
    byGameFranchise: CacheEntry;
    byAmiiboSeries: CacheEntry;
  } = {
    byCharacterName: { term: '', amiibos: [] },
    byGameFranchise: { term: '', amiibos: [] },
    byAmiiboSeries: { term: '', amiibos: [] },
  };

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem('amiiboCache', JSON.stringify(this.storedSearch));
  }

  private loadFromLocalStorage() {
    const storedCache = localStorage.getItem('amiiboCache');
    if (storedCache) {
      this.storedSearch = JSON.parse(storedCache);
    }
  }

  searchByName(term: string): Observable<Amiibo[]> {
    if (this.storedSearch.byCharacterName.term === term) {
      return of(this.storedSearch.byCharacterName.amiibos);
    }

    const url = `${this.baseUrl}amiibo/?name=${term}&type=figure`;
    return this.http.get<{ amiibo: Amiibo[] }>(url).pipe(
      map((response) => response.amiibo),
      tap((amiibos) => {
        this.storedSearch.byCharacterName = { term, amiibos };
        this.saveToLocalStorage();
      })
    );
  }

  searchByAmiiboSeries(term: string): Observable<Amiibo[]> {
    if (this.storedSearch.byAmiiboSeries.term === term) {
      return of(this.storedSearch.byAmiiboSeries.amiibos);
    }

    const url = `${this.baseUrl}amiibo/?amiiboSeries=${term}&type=figure`;
    return this.http.get<{ amiibo: Amiibo[] }>(url).pipe(
      map((response) => response.amiibo),
      tap((amiibos) => {
        this.storedSearch.byAmiiboSeries = { term, amiibos };
        this.saveToLocalStorage();
      })
    );
  }

  searchByGameFranchise(term: string): Observable<Amiibo[]> {
    if (this.storedSearch.byGameFranchise.term === term) {
      return of(this.storedSearch.byGameFranchise.amiibos);
    }

    const url = `${this.baseUrl}amiibo/?gameseries=${term}&type=figure`;
    return this.http.get<{ amiibo: Amiibo[] }>(url).pipe(
      map((response) => response.amiibo),
      tap((amiibos) => {
        this.storedSearch.byGameFranchise = { term, amiibos };
        this.saveToLocalStorage();
      })
    );
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
