import { Component } from '@angular/core';

@Component({
  selector: 'app-gym-8',
  standalone: false,
  templateUrl: './gym-8.html',
  styleUrl: './gym-8.css'
})
export class Gym8 {
  Leader = "Clair";
  LeaderArt = "VSClair.png";
  Badge = "Rising Badge";
  BadgeArt = "Rising_Badge.png";
  Specialty = "Dragon"; 
  Gym = "Blackthorn Gym";
  AdditionalNotes = ["Additional Note:","Clair has a Full Heal and a Full Restore"];
  PokemonParty = {
    Pokemon: [
      {
        Name: 'Dragonair',
        Img: 'Dragonair.png',
        Gender: '♀',
        Level: '37',
        Types: ['Dragon'],
        Held: 'None',
        Moves: [
          { Attack: 'Surf', Type: 'Water' },
          { Attack: 'Slam', Type: 'Normal' },
          { Attack: 'Thunder Wave', Type: 'Electric' },
          { Attack: 'Dragon Breath', Type: 'Dragon' }
        ]
      },
      {
        Name: 'Dragonair',
        Img: 'Dragonair.png',
        Gender: '♀',
        Level: '37',
        Types: ['Dragon'],
        Held: 'None',
        Moves: [
          { Attack: 'Thunderbolt', Type: 'Electric' },
          { Attack: 'Slam', Type: 'Normal' },
          { Attack: 'Thunder Wave', Type: 'Electric' },
          { Attack: 'Dragon Breath', Type: 'Dragon' }
        ]
      },
      {
        Name: 'Dragonair',
        Img: 'Dragonair.png',
        Gender: '♀',
        Level: '37',
        Types: ['Dragon'],
        Held: 'None',
        Moves: [
          { Attack: 'Ice Beam', Type: 'Ice' },
          { Attack: 'Slam', Type: 'Normal' },
          { Attack: 'Thunder Wave', Type: 'Electric' },
          { Attack: 'Dragon Breath', Type: 'Dragon' }
        ]
      },
      {
        Name: 'Kingdra',
        Img: 'Kingdra.png',
        Gender: '♀',
        Level: '40',
        Types: ['Water', 'Dragon'],
        Held: 'None',
        Moves: [
          { Attack: 'Surf', Type: 'Water' },
          { Attack: 'Dragon Breath', Type: 'Dragon' },
          { Attack: 'Smoke Screen', Type: 'Normal' },
          { Attack: 'Hyper Beam', Type: 'Normal' }
        ]
      },
    ]
  }
}
