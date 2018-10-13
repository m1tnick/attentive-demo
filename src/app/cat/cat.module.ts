import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatComponent } from './cat.component';
import { CatService } from './services/cat.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [CatComponent],
  exports: [CatComponent],
  providers:[CatService]
})
export class CatModule { }
