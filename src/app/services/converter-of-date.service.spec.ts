import { TestBed } from '@angular/core/testing';

import { ConverterOfDateService } from './converter-of-date.service';

describe('ConverterOfDateService', () => {
  let service: ConverterOfDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConverterOfDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
