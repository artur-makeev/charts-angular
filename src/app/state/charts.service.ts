import { Injectable } from '@angular/core';
import { ChartColor, ChartType, IChart } from './charts.types';
import { Store } from '@ngrx/store';
import { ChartsStateActions } from './charts.actions';

@Injectable({
  providedIn: 'root',
})
export class ChartsService {
  constructor(private store: Store) {}

  createChart(
    name: string = 'New chart',
    type: ChartType = 'line',
    color: ChartColor = '#009688'
  ): void {
    this.store.dispatch(
      ChartsStateActions.createChart({
        chart: { color, type, name },
      })
    );
  }

  updateChart(
    chart: IChart,
    name: string = 'Updated Chart',
    type: ChartType = 'line',
    color: ChartColor = '#009688'
  ): void {
    this.store.dispatch(
      ChartsStateActions.updateChart({
        chart: { ...chart, color, type, name },
      })
    );
  }

  deleteChart(id: string): void {
    this.store.dispatch(ChartsStateActions.deleteChart({ id }));
  }
}
