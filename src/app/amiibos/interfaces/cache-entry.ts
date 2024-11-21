import { Amiibo } from './amiibo';

export interface CacheEntry {
  term: string;
  amiibos: Amiibo[];
}
