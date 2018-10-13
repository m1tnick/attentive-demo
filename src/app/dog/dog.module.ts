import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DogsService } from './services/dogs.service';
import { DogComponent } from './dog.component';
import { DogFormComponent } from './dog-form/dog-form.component';
import { DogImageComponent } from './dog-image/dog-image.component';

@NgModule({
  imports: [
    SharedModule
  ],
  providers:[DogsService],
  declarations: [DogComponent, DogFormComponent, DogImageComponent],
  exports: [DogComponent]
})
export class DogModule { }
