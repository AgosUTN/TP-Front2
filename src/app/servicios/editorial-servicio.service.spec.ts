import { TestBed } from '@angular/core/testing';

import { EditorialServicioService } from './editorial-servicio.service';

describe('EditorialServicioService', () => {
  let service: EditorialServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditorialServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
