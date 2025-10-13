import { TestBed } from '@angular/core/testing';

import { JohtoGym } from './johto-gym';

describe('JohtoGym', () => {
  let service: JohtoGym;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JohtoGym);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
