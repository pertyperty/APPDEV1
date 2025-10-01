import { Component } from '@angular/core';

@Component({
  selector: 'app-gym-1',
  standalone: false,
  templateUrl: './gym-1.html',
  styleUrl: './gym-1.css'
})
export class Gym1 {
  Leader = "Falkner";
  LeaderArt = "VSFalkner.png";
  Badge = "Zephyr Badge";
  BadgeArt = "Zephyr_Badge.png";
  Specialty = "Flying"; 
  Gym = "Violet Gym";
  AdditionalNotes = [];
  PokemonParty = {
    Pokemon: [
      {
        Name: 'Pidgey',
        Img: 'Pidgey.png',
        Gender: '♂',
        Level: '7',
        Types: ['Normal', 'Flying'],
        Held: 'None',
        Moves: [
          { Attack: 'Scratch', Type: 'Normal' },
          { Attack: 'Mud-Slap', Type: 'Ground' },
          { Attack: ' ', Type: ' ' },
          { Attack: ' ', Type: ' ' }
        ]
      },
      {
        Name: 'Pidgeotto',
        Img: 'Pidgeotto.png',
        Gender: '♂',
        Level: '9',
        Types: ['Normal', 'Flying'],
        Held: 'None',
        Moves: [
          { Attack: 'Tackle', Type: 'Normal' },
          { Attack: 'Gust', Type: 'Flying' },
          { Attack: 'Mud-Slap', Type: 'Ground' },
          { Attack: ' ', Type: ' ' },
        ]
      },
    ]
  }
}
