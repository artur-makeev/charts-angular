import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsPageComponent } from './charts-page.component';
import { ChartComponent } from '../chart/chart.component';
import { ChartListComponent } from '../chart-list/chart-list.component';
import { DateRangeComponent } from '../date-range/date-range.component';

@NgModule({
  declarations: [ChartListComponent, ChartsPageComponent],
  imports: [CommonModule, DateRangeComponent, ChartComponent],
})
export class ChartsPageModule {}
