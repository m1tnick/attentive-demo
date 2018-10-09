import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DogComponent } from './dog/dog.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [DogComponent],
  exports: [DogComponent]
})
export class DogModule { }
