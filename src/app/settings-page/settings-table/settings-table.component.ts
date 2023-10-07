import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { selectCharts } from 'src/app/state/charts.selectors';
import { MatIconModule } from '@angular/material/icon';
import { ChartModalComponent } from '../chart-modal/chart-modal.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { IChart } from 'src/app/state/charts.types';
import { ChartsService } from 'src/app/state/charts.service';

@Component({
  selector: 'app-settings-table',
  templateUrl: './settings-table.component.html',
  styleUrls: ['./settings-table.component.scss'],
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, MatDialogModule, MatButtonModule],
})
export class SettingsTableComponent {
  displayedColumns: string[] = ['chart', 'edit', 'remove'];
  charts$ = this.store.select(selectCharts);

  constructor(
    private store: Store,
    public dialog: MatDialog,
    private chartsService: ChartsService
  ) {}

  openDialog(chart?: IChart): void {
    this.dialog.open(ChartModalComponent, {
      data: { chart },
      panelClass: 'modal-content',
    });
  }

  deleteChart(id: string): void {
    this.chartsService.deleteChart(id);
  }
}
