import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Store } from '@ngrx/store';
import { ChartsApiActions } from './state/charts.actions';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'test-app';

  constructor(
    private service: HttpService,
    private store: Store
  ) {}

  ngOnInit() {
    this.service
      .getCharts()
      .pipe(take(1))
      .subscribe(chartsData =>
        this.store.dispatch(ChartsApiActions.retrieveChartList({ chartsData }))
      );
  }
}
