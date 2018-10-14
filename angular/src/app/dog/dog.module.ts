import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DogsService } from './services/dogs.service';
import { DogComponent } from './dog.component';
import { DogRoutingModule } from './dog-routing.module';
import { DogListModule } from './dog-list/dog-list.module';
import { CoreModule } from '../core/core.module';


@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    DogRoutingModule,
    DogListModule
  ],
  providers:[DogsService],
  declarations: [DogComponent],
  exports: [DogComponent]
})
export class DogModule { }
