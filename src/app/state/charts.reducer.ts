import { createReducer, on } from '@ngrx/store';
import { ChartsApiActions, ChartsStateActions } from './charts.actions';
import * as uuid from 'uuid';
import { IChart, ChartsSchema } from './charts.types';
import { mockChartData } from 'src/utils/mockChartData';

export const rangeStart = Date.UTC(1990, 0, 1);
export const rangeEnd = Date.UTC(2023, 0, 1);

export const initialState: ChartsSchema = {
  charts: [],
  range: {
    start: rangeStart,
    end: rangeEnd,
  },
};

export const chartsReducer = createReducer(
  initialState,
  on(ChartsApiActions.retrieveChartList, (_state, { chartsData }) => {
    const newCharts: IChart[] = chartsData.map(chart => ({
      id: uuid.v4(),
      name: chart.name,
      type: 'line',
      color: '#2196f3',
      data: chart.data,
    }));

    return {
      charts: newCharts,
      range: { ..._state.range },
    };
  }),
  on(ChartsStateActions.updateDateRange, (_state, { start, end }): ChartsSchema => {
    return {
      charts: [..._state.charts],
      range: {
        start: start || rangeStart,
        end: end || rangeEnd,
      },
    };
  }),
  on(ChartsStateActions.createChart, (_state, { chart }): ChartsSchema => {
    return {
      range: { ..._state.range },
      charts: [
        ..._state.charts,
        {
          id: uuid.v4(),
          name: chart.name,
          type: chart.type,
          color: chart.color,
          data: mockChartData,
        },
      ],
    };
  }),
  on(ChartsStateActions.updateChart, (_state, { chart }): ChartsSchema => {
    return {
      range: { ..._state.range },
      charts: [
        ..._state.charts.map(oldChart => {
          if (oldChart.id === chart.id) {
            return {
              ...chart,
            };
          } else {
            return { ...oldChart };
          }
        }),
      ],
    };
  }),
  on(ChartsStateActions.deleteChart, (_state, { id }): ChartsSchema => {
    return {
      range: { ..._state.range },
      charts: [..._state.charts.filter(chart => chart.id !== id)],
    };
  })
);
