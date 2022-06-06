import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name!: string;
  showPokemonsListView: boolean = true;
  pokemones = Array.from(Array(20).keys()).map(i => i + 1)

  ngOnInit() {
  }

  nextPokemones() {
    this.pokemones = this.pokemones.map(i => i + 20)
  }

  prevPokemones(){
    this.pokemones = this.pokemones.map(i =>  i - 20 <= 0 ? i : i - 20)
  }

  showViewSearch() {
    console.log({name: this.name})
    this.showPokemonsListView = false;
   
  }

  showViewPokemonsList() {
    this.showPokemonsListView = true;
  }
}
