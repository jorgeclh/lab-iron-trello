import { TestBed, inject } from '@angular/core/testing';

import { DragulaService } from './dragula.service';

describe('DragulaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DragulaService]
    });
  });

  it('should be created', inject([DragulaService], (service: DragulaService) => {
    expect(service).toBeTruthy();
  }));
});
