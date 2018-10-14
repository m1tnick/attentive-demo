import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CatchDogComponent } from './catch-dog/catch-dog.component';
import { PokeDogComponent } from './pokedog.component';
import { PokeDogerService } from './services/pokedoger.service';


@NgModule({
  imports: [
    SharedModule
  ],
  providers:[PokeDogerService],
  declarations: [CatchDogComponent, PokeDogComponent],
  exports: [PokeDogComponent]
})
export class PokeDogModule { }
