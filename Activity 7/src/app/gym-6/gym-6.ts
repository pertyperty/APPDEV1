import { Component } from '@angular/core';

@Component({
  selector: 'app-gym-6',
  standalone: false,
  templateUrl: './gym-6.html',
  styleUrl: './gym-6.css'
})
export class Gym6 {
  Leader = "Jasmine";
  LeaderArt = "VSJasmine.png";
  Badge = "Mineral Badge";
  BadgeArt = "Mineral_Badge.png";
  Specialty = "Steel"; 
  Gym = "Olivine Gym";
  AdditionalNotes = ["Additional Note:","Jasmine has a Hyper Potion"];
  PokemonParty = {
    Pokemon: [
      {
        Name: 'Magnemite',
        Img: 'Magnemite.png',
        Gender: '',
        Level: '30',
        Types: ['Electric', 'Steel'],
        Held: 'None',
        Moves: [
          { Attack: 'Thunderbolt', Type: 'Electric' },
          { Attack: 'Supersonic', Type: 'Normal' },
          { Attack: 'Sonic Boom', Type: 'Normal' },
          { Attack: 'Thunder Wave', Type: 'Electric' }
        ]
      },
      {
        Name: 'Magnemite',
        Img: 'Magnemite.png',
        Gender: '',
        Level: '30',
        Types: ['Electric', 'Steel'],
        Held: 'None',
        Moves: [
          { Attack: 'Thunderbolt', Type: 'Electric' },
          { Attack: 'Supersonic', Type: 'Normal' },
          { Attack: 'Sonic Boom', Type: 'Normal' },
          { Attack: 'Thunder Wave', Type: 'Electric' }
        ]
      },
      {
        Name: 'Steelix',
        Img: 'Steelix.png',
        Gender: '♂',
        Level: '35',
        Types: ['Steel', 'Ground'],
        Held: 'None',
        Moves: [
          { Attack: 'Iron Tail', Type: 'Steel' },
          { Attack: 'Rock Throw', Type: 'Rock' },
          { Attack: 'Sunny Day', Type: 'Fire' },
          { Attack: 'Screech', Type: 'Normal' }
        ]
      },
    ]
  }
}
