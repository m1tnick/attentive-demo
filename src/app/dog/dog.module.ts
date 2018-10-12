import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DogComponent } from './dog/dog.component';
import { DogsService } from './services/dogs.service';
import { DogFormComponent } from './dog/dog-form/dog-form.component';

@NgModule({
  imports: [
    SharedModule
  ],
  providers:[DogsService],
  declarations: [DogComponent, DogFormComponent],
  exports: [DogComponent]
})
export class DogModule { }
