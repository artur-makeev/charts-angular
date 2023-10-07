import { createActionGroup, props } from '@ngrx/store';
import { ChartDataFromApi, DateRange, IChart } from './charts.types';

export const ChartsApiActions = createActionGroup({
  source: 'Charts API',
  events: {
    'Retrieve Chart List': props<{ chartsData: ReadonlyArray<ChartDataFromApi> }>(),
  },
});

export const ChartsStateActions = createActionGroup({
  source: 'Charts State',
  events: {
    'Update date range': props<DateRange>(),
    'Create chart': props<{ chart: Omit<IChart, 'id' | 'data'> }>(),
    'Delete chart': props<{ id: string }>(),
    'Update chart': props<{ chart: IChart }>(),
  },
});
