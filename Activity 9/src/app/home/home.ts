import { Component } from '@angular/core';
import { JohtoGym } from '../johto-gym';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  Region = "Johto";
  Lore = "The Johto region (Japanese: ジョウト地方 Johto region) is a region of the Pokémon world. Johto is located west of Kanto, which together form a joint landmass that is south of Sinnoh and Sinjoh Ruins.";
  Description = "It was the second core series region to be introduced. First explored in Pokémon Gold and Silver, it is home to an additional 100 Pokémon that were not present in the previous games. It is also the setting of Pokémon Crystal, Pokémon HeartGold, and Pokémon SoulSilver.";
  PlayerInfo = "Players begin their journey in New Bark Town, where Professor Elm offers either Chikorita, Cyndaquil, or Totodile to beginning Pokémon Trainers.";
  Fact = "The English-version names of most of the cities in Johto are names of plants or things related to plants."
  Gyms: any[] = [];
  
  constructor (private gym: JohtoGym){}

  ngOnInit(): void {
    this.Gyms = [
      this.gym.getGym1Info(),
      this.gym.getGym2Info(),
      this.gym.getGym3Info(),
      this.gym.getGym4Info(),
      this.gym.getGym5Info(),
      this.gym.getGym6Info(),
      this.gym.getGym7Info(),
      this.gym.getGym8Info(),
    ];
  } 
}

