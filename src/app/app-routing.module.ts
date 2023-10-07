import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsPageComponent } from './charts-page/page/charts-page.component';
import { SettingsPageComponent } from './settings-page/page/settings-page.component';

const routes: Routes = [
  { path: '', component: ChartsPageComponent },
  { path: 'settings', component: SettingsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
