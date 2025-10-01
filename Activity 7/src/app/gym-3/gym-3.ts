import { Component } from '@angular/core';

@Component({
  selector: 'app-gym-3',
  standalone: false,
  templateUrl: './gym-3.html',
  styleUrl: './gym-3.css'
})
export class Gym3 {
  Leader = "Whitney";
  LeaderArt = "VSWhitney.png";
  Badge = "Plain Badge";
  BadgeArt = "Plain_Badge.png";
  Specialty = "Normal"; 
  Gym = "Goldenrod Gym";
  AdditionalNotes = [];
  PokemonParty = {
    Pokemon: [
      {
        Name: 'Clefairy',
        Img: 'Clefairy.png',
        Gender: '♀',
        Level: '18',
        Types: ['Normal'],
        Held: 'None',
        Moves: [
          { Attack: 'Encore', Type: 'Normal' },
          { Attack: 'Mimic', Type: 'Normal' },
          { Attack: 'DoubleSlap', Type: 'Normal' },
          { Attack: 'Metronome', Type: 'Normal' }
        ]
      },
      {
        Name: 'Miltank',
        Img: 'Miltank.png',
        Gender: '♀',
        Level: '20',
        Types: ['Normal'],
        Held: 'None',
        Moves: [
          { Attack: 'Stomp', Type: 'Normal' },
          { Attack: 'Attract', Type: 'Normal' },
          { Attack: 'Milk Drink', Type: 'Normal' },
          { Attack: 'Rollout', Type: 'Rock' },
        ]
      },
    ]
  }
}
