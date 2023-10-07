import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCharts, selectRange } from 'src/app/state/charts.selectors';

@Component({
  selector: 'app-charts-list',
  templateUrl: './chart-list.component.html',
  styleUrls: ['./chart-list.component.scss'],
})
export class ChartListComponent {
  charts$ = this.store.select(selectCharts);
  range$ = this.store.select(selectRange);

  constructor(private store: Store) {}
}
