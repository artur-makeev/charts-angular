import { Component, Inject } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChartColor, ChartType, IChart } from 'src/app/state/charts.types';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ChartsService } from 'src/app/state/charts.service';

@Component({
  selector: 'app-chart-modal',
  templateUrl: 'chart-modal.component.html',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
})
export class ChartModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { chart?: IChart },
    public dialogRef: MatDialogRef<ChartModalComponent>,
    private chartsService: ChartsService
  ) {}

  chartName: string = this.data.chart?.name || '';
  chartType: ChartType = this.data.chart?.type || 'line';
  chartColor: ChartColor = this.data.chart?.color || '#009688';
  newChartName: string;

  getNameInput(val: string) {
    this.newChartName = val;
  }

  createChart(): void {
    this.chartsService.createChart(this.newChartName, this.chartType, this.chartColor);
  }

  updateChart(): void {
    const name = this.newChartName ? this.newChartName : this.chartName;
    if (this.data.chart) {
      this.chartsService.updateChart(this.data.chart, name, this.chartType, this.chartColor);
    }
  }
}
