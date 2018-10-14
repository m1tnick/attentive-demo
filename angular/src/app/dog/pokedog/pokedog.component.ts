import { Component, OnInit } from '@angular/core';
import { PokeDogerService } from './services/pokedoger.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { DogerVM } from './model/DogerVM';
import { take } from 'rxjs/operators';

@Component({
  selector: 'pokedog',
  templateUrl: './pokedog.component.html',
  styleUrls: []
})
export class PokeDogComponent implements OnInit {

  randomDoger$: Observable<DogerVM>;
  catchedDogers: DogerVM[];
  private loadingImg = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingImg.asObservable();

  constructor(private pokeDogerService : PokeDogerService) { }

  ngOnInit() {
      this.readCatchedDogs();
  }

  onFindDoger() {
      this.randomDoger$ =this.pokeDogerService.searchDoger();
  }
  
  onCatchingDoger(doger: DogerVM) {
      this.pokeDogerService.catchDoger(doger).pipe(take(1)).subscribe(data => this.readCatchedDogs());
  }

  readCatchedDogs() {
    this.pokeDogerService.readAllDoger().pipe(take(1)).
    subscribe(data => this.catchedDogers = data);
  }

  onUpdateDoger(doger: DogerVM) {
      this.pokeDogerService.updateDoger(doger).subscribe(data => this.readCatchedDogs())
  }

  onDeleteDoger(id: number) {
    this.pokeDogerService.deleteDoger(id).subscribe(data => this.readCatchedDogs())

  }
}
