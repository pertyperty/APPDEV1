import { Component } from '@angular/core';

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
  Gym = [
    {
      Leader: "Falkner",
      LeaderArt: "VSFalkner.png",
      Badge: "Zephyr Badge",
      BadgeArt: "Zephyr_Badge.png",
      Specialty: "Flying",
      City: "Violet City"
    },
    {
      Leader: "Bugsy",
      LeaderArt: "VSBugsy.png",
      Badge: "Hive Badge",
      BadgeArt: "Hive_Badge.png",
      Specialty: "Bug",
      City: "Azalea Town"
    },
    {
      Leader: "Whitney",
      LeaderArt: "VSWhitney.png",
      Badge: "Plain Badge",
      BadgeArt: "Plain_Badge.png",
      Specialty: "Normal",
      City: "Goldenrod City"
    },
    {
      Leader: "Morty",
      LeaderArt: "VSMorty.png",
      Badge: "Fog Badge",
      BadgeArt: "Fog_Badge.png",
      Specialty: "Ghost",
      City: "Ecruteak City"
    },
    {
      Leader: "Chuck",
      LeaderArt: "VSChuck.png",
      Badge: "Storm Badge",
      BadgeArt: "Storm_Badge.png",
      Specialty: "Fighting",
      City: "Cianwood City",
    },
    {
      Leader: "Jasmine",
      LeaderArt: "VSJasmine.png",
      Badge: "Mineral Badge",
      BadgeArt: "Mineral_Badge.png",
      Specialty: "Steel", 
      City: "Olivine City",
    },
    {
      Leader: "Pryce",
      LeaderArt: "VSPryce.png",
      Badge: "Glacier Badge",
      BadgeArt: "Glacier_Badge.png",
      Specialty: "Ice", 
      City: "Mahogany Town"
    },
    {
      Leader: "Clair",
      LeaderArt: "VSClair.png",
      Badge: "Rising Badge",
      BadgeArt: "Rising_Badge.png",
      Specialty: "Dragon", 
      City: "Blackthorn City",
    }
  ]
}

