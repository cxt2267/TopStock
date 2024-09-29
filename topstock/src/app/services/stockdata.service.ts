import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StockDataService {
  private apiUrl = 'https://django-api-endpoint/stocks'; 

  constructor(private http: HttpClient) {}

  getStockRankings(): Observable<any> {
    return this.http.get(`${this.apiUrl}/rankings`);
  }

  getStockDetails(symbol: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/stocks/${symbol}`);
  }

  searchStocks(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search`, {
      params: { q: query },
    }); 
  }
}
