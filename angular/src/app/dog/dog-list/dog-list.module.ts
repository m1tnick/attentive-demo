import { NgModule } from '@angular/core';
import { DogFormComponent } from './dog-form/dog-form.component';
import { DogImageComponent } from './dog-image/dog-image.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DogsService } from '../services/dogs.service';
import { DogListComponent } from './dog-list.component';

@NgModule({
  imports: [
    SharedModule
  ],
  providers:[DogsService],
  declarations: [DogListComponent, DogFormComponent, DogImageComponent],
  exports: [DogListComponent]
})
export class DogListModule { }
