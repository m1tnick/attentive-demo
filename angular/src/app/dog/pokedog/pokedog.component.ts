import { Component, OnInit } from '@angular/core';
import { PokeDogerService } from './services/pokedoger.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { DogerVM } from './model/DogerVM';

@Component({
  selector: 'pokedog',
  templateUrl: './pokedog.component.html',
  styleUrls: []
})
export class PokeDogComponent implements OnInit {

  randomDoger$: Observable<DogerVM>;
  private loadingImg = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingImg.asObservable();

  constructor(private pokeDogerService : PokeDogerService) { }

  ngOnInit() {
      this.pokeDogerService.readAllDoger().subscribe(response => {
          console.log(response);
      })
  }

  onFindDoger() {
      this.randomDoger$ =this.pokeDogerService.searchDoger();
  }
  
  onCatchingDoger(doger: DogerVM) {
      this.pokeDogerService.catchDoger(doger).subscribe();
  }

}
