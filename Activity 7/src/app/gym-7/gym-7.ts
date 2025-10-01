import { Component } from '@angular/core';

@Component({
  selector: 'app-gym-7',
  standalone: false,
  templateUrl: './gym-7.html',
  styleUrl: './gym-7.css'
})
export class Gym7 {
  Leader = "Pryce";
  LeaderArt = "VSPryce.png";
  Badge = "Glacier Badge";
  BadgeArt = "Glacier_Badge.png";
  Specialty = "Ice"; 
  Gym = "Mahogany Gym";
  AdditionalNotes = ["Additional Note:","Pryce has a Hyper Potion"];
  PokemonParty = {
    Pokemon: [
      {
        Name: 'Seel',
        Img: 'Seel.png',
        Gender: '♂',
        Level: '27',
        Types: ['Water'],
        Held: 'None',
        Moves: [
          { Attack: 'Headbutt', Type: 'Normal' },
          { Attack: 'Icy Wind', Type: 'Ice' },
          { Attack: 'Aurora Beam', Type: 'Ice' },
          { Attack: 'Rest', Type: 'Psychic' }
        ]
      },
      {
        Name: 'Dewgong',
        Img: 'Dewgong.png',
        Gender: '♂',
        Level: '29',
        Types: ['Water', 'Ice'],
        Held: 'None',
        Moves: [
          { Attack: 'Headbutt', Type: 'Normal' },
          { Attack: 'Icy Wind', Type: 'Ice' },
          { Attack: 'Aurora Beam', Type: 'Ice' },
          { Attack: 'Rest', Type: 'Psychic' }
        ]
      },
      {
        Name: 'Piloswine',
        Img: 'Piloswine.png',
        Gender: '♂',
        Level: '31',
        Types: ['Ice', 'Ground'],
        Held: 'None',
        Moves: [
          { Attack: 'Icy Wind', Type: 'Ice' },
          { Attack: 'Fury Attack', Type: 'Normal' },
          { Attack: 'Mist', Type: 'Ice' },
          { Attack: 'Blizzard', Type: 'Ice' }
        ]
      },
    ]
  }
}
