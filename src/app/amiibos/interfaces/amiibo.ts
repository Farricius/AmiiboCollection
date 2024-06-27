export interface Release {
  au?: string | null;
  eu?: string | null;
  jp?: string | null;
  na?: string | null;
}

export interface Amiibo {
  amiiboSeries: string;
  character: string;
  gameSeries: string;
  head: string;
  image: string;
  name: string;
  release: Release;
  tail: string;
  type: string;
}
