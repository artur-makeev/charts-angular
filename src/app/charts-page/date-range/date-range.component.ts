import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf, JsonPipe, CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { Store } from '@ngrx/store';
import { rangeEnd, rangeStart } from 'src/app/state/charts.reducer';
import { ChartsStateActions } from 'src/app/state/charts.actions';
import { Subscription } from 'rxjs';
import { selectCharts } from 'src/app/state/charts.selectors';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    JsonPipe,
    MatNativeDateModule,
  ],
})
export class DateRangeComponent implements OnInit, OnDestroy {
  subscr: Subscription;
  range = new FormGroup({
    start: new FormControl<Date | null>(new Date(rangeStart)),
    end: new FormControl<Date | null>(new Date(rangeEnd)),
  });

  charts$ = this.store.select(selectCharts);

  constructor(private store: Store) {}

  ngOnInit() {
    this.subscr = this.range.valueChanges.subscribe(range => {
      this.store.dispatch(
        ChartsStateActions.updateDateRange({
          start: range.start?.valueOf() || null,
          end: range.end?.valueOf() || null,
        })
      );
    });
  }

  ngOnDestroy() {
    this.subscr.unsubscribe;
  }
}
