import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { FilterPipe } from './pipes/filter.pipe';

const IMPORTS=[MaterialModule]
const DECLARATIONS=[FilterPipe]
@NgModule({
  declarations: [DECLARATIONS],
  imports: [
    CommonModule,
    IMPORTS
  ],
  exports:[IMPORTS,DECLARATIONS]
})
export class SharedModule { }
