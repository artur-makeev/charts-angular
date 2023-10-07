import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ChartDataFromApi } from './state/charts.types';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getCharts(): Observable<ChartDataFromApi[]> {
    return this.http.get<ChartDataFromApi[]>('http://localhost:8000/charts');
  }
}
