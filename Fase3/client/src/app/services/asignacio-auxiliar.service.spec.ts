import { TestBed } from '@angular/core/testing';

import { AsignacioAuxiliarService } from './asignacio-auxiliar.service';

describe('AsignacioAuxiliarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsignacioAuxiliarService = TestBed.get(AsignacioAuxiliarService);
    expect(service).toBeTruthy();
  });
});
