import { TestBed } from '@angular/core/testing';

import { StockDataService } from './stockdata.service';

describe('StockdataService', () => {
  let service: StockDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
