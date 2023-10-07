import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPageComponent } from './settings-page.component';
import { SettingsTableComponent } from '../settings-table/settings-table.component';

@NgModule({
  declarations: [SettingsPageComponent],
  imports: [CommonModule, SettingsTableComponent],
})
export class SettingsPageModule {}
