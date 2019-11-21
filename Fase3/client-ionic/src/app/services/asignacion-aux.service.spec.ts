import { TestBed } from '@angular/core/testing';

import { AsignacionAuxService } from './asignacion-aux.service';

describe('AsignacionAuxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsignacionAuxService = TestBed.get(AsignacionAuxService);
    expect(service).toBeTruthy();
  });
});
