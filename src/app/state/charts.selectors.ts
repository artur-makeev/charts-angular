import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ChartsSchema } from './charts.types';

export const selectChartsState = createFeatureSelector<ChartsSchema>('chartsState');

export const selectCharts = createSelector(
  selectChartsState,
  (state: ChartsSchema) => state.charts
);

export const selectRange = createSelector(selectChartsState, (state: ChartsSchema) => state.range);
