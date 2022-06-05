import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  pokemones = Array.from(Array(20).keys()).map(i => i + 1)

  ngOnInit() {
  }

  nextPokemones() {
    this.pokemones = this.pokemones.map(i => i + 20)
  }
}
