import { PokemonService } from './../services/pokemon.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-ver-pokemon',
  templateUrl: './ver-pokemon.component.html',
  styleUrls: ['./ver-pokemon.component.sass']
})
export class VerPokemonComponent implements OnInit {
  @Input() name?: string
  urlImage!: string;
  height?: number
  weight?: number
  types?: string

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
   
      if (!this.name) return console.log("no name todavia")
    this.pokemonService.getPokemonByName(this.name).subscribe((data: any) => { 
  
      this.urlImage = data.sprites.front_default
      this.types = data.types.map((t: any) => t.type.name).join(", ");
      this.height = data.height
      this.weight = data.weight
      console.log("data"+data)
    }, error =>{
      this.name = "El valor agregado no existe"
      this.urlImage ="vacio"
      this.types = "";
    
    }
    )
      
     
      
   
  
      


      
    
  }
}
