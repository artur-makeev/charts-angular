export type Measurement = [number, number];
export type ChartType = 'line' | 'spline' | 'bar' | 'area';
export type ChartColor = '#2196f3' | '#f44336' | '#9c27b0' | '#009688';

export interface ChartDataFromApi {
  name: string;
  data: Measurement[];
}

export interface IChart {
  id: string;
  name: string;
  type: ChartType;
  color: ChartColor;
  data: Measurement[];
}

export interface DateRange {
  start: number | null;
  end: number | null;
}

export interface ChartsSchema {
  charts: IChart[];
  range: DateRange;
}
