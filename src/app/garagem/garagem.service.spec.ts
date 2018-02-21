import { TestBed, inject } from '@angular/core/testing';

import { GaragemService } from './garagem.service';

describe('GaragemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GaragemService]
    });
  });

  it('should be created', inject([GaragemService], (service: GaragemService) => {
    expect(service).toBeTruthy();
  }));
});
