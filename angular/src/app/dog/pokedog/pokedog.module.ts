import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CatchDogComponent } from './catch-dog/catch-dog.component';
import { PokeDogComponent } from './pokedog.component';
import { PokeDogerService } from './services/pokedoger.service';
import { CatchedDogersComponent } from './catched-dogers/catched-dogers.component';
import { DogerDetailsComponent } from './doger-details/doger-details.component';


@NgModule({
  imports: [
    SharedModule
  ],
  providers:[PokeDogerService],
  declarations: [CatchDogComponent, PokeDogComponent, CatchedDogersComponent, DogerDetailsComponent],
  exports: [PokeDogComponent]
})
export class PokeDogModule { }
