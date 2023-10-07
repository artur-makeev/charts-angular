import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCharts } from 'src/app/state/charts.selectors';

@Component({
  selector: 'app-charts-page',
  templateUrl: './charts-page.component.html',
  styleUrls: ['./charts-page.component.scss'],
})
export class ChartsPageComponent {
  charts$ = this.store.select(selectCharts);

  constructor(private store: Store) {}
}
