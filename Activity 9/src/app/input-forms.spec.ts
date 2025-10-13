import { TestBed } from '@angular/core/testing';

import { InputForms } from './input-forms';

describe('InputForms', () => {
  let service: InputForms;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputForms);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
