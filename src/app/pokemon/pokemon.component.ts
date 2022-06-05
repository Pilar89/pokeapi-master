import { PokemonService } from './../services/pokemon.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.sass']
})
export class PokemonComponent implements OnInit {
  @Input() id?: string
  name?: string
  pictureUrl?: string
  types?: string
  height?: number
  weight?: number

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    if (!this.id) return console.log("no id todavia")
    this.pokemonId().subscribe((data: any) => {
      this.name = data.name
      this.pictureUrl = data.sprites.front_default
      this.types = data.types.map((t: any) => t.type.name).join(", ");
      this.height = data.height
      this.weight = data.weight
    })
  }

  pokemonId() {
    return this.pokemonService.getPokemon(Number.parseInt(this.id || "1"))
  }

}
