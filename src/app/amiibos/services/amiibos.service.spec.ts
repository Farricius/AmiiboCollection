import { TestBed } from '@angular/core/testing';

import { AmiibosService } from './amiibos.service';

describe('AmiibosService', () => {
  let service: AmiibosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmiibosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
