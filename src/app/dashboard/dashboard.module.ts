import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, DashboardRoutingModule, MaterialModule, LayoutModule],
})
export class DashboardModule {}
