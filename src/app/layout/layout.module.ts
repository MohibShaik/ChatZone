import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, LayoutRoutingModule, MaterialModule],
  exports: [HeaderComponent],
})
export class LayoutModule {}
