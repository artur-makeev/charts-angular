import { Component, Input, OnChanges } from '@angular/core';
import { DateRange, IChart } from '../../state/charts.types';
import * as Highcharts from 'highcharts';
import { rangeEnd, rangeStart } from 'src/app/state/charts.reducer';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  standalone: true,
  imports: [HighchartsChartModule, MatCardModule, CommonModule],
})
export class ChartComponent implements OnChanges {
  Highcharts: typeof Highcharts = Highcharts;
  @Input() chart: IChart;
  @Input() range: DateRange | null;
  options: Highcharts.Options;

  ngOnChanges() {
    this.options = {
      chart: {
        type: this.chart.type,
        width: 320,
        height: 300,
      },
      title: {
        text: this.chart.name,
      },
      yAxis: {
        title: {
          text: '',
        },
      },
      xAxis: {
        type: 'datetime',
        allowDecimals: false,
        min: this.range?.start || rangeStart,
        max: this.range?.end || rangeEnd,
      },
      plotOptions: {
        series: {
          pointStart: this.range?.start || rangeStart,
        },
      },
      series: [
        {
          type: this.chart.type,
          color: this.chart.color,
          showInLegend: false,
          data: this.chart.data,
        },
      ],
    };
  }
}
