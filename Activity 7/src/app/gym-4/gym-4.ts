import { Component } from '@angular/core';

@Component({
  selector: 'app-gym-4',
  standalone: false,
  templateUrl: './gym-4.html',
  styleUrl: './gym-4.css'
})
export class Gym4 {
  Leader = "Morty";
  LeaderArt = "VSMorty.png";
  Badge = "Fog Badge";
  BadgeArt = "Fog_Badge.png";
  Specialty = "Ghost"; 
  Gym = "Ecruteak Gym";
  AdditionalNotes = [];
  PokemonParty = {
    Pokemon: [
      {
        Name: 'Gastly',
        Img: 'Gastly.png',
        Gender: '♂',
        Level: '21',
        Types: ['Ghost', 'Poison'],
        Held: 'None',
        Moves: [
          { Attack: 'Lick', Type: 'Ghost' },
          { Attack: 'Spite', Type: 'Ghost' },
          { Attack: 'Mean Look', Type: 'Normal' },
          { Attack: 'Curse', Type: '???' }
        ]
      },
      {
        Name: 'Haunter',
        Img: 'Haunter.png',
        Gender: '♂',
        Level: '21',
        Types: ['Ghost', 'Poison'],
        Held: 'None',
        Moves: [
          { Attack: 'Hypnosis', Type: 'Psychic' },
          { Attack: 'Curse', Type: '???' },
          { Attack: 'Mimic', Type: 'Normal' },
          { Attack: 'Night Shade', Type: 'Ghost' }
        ]
      },
      {
        Name: 'Gengar',
        Img: 'Gengar.png',
        Gender: '♂',
        Level: '25',
        Types: ['Ghost', 'Poison'],
        Held: 'None',
        Moves: [
          { Attack: 'Shadow Ball', Type: 'Ghost' },
          { Attack: 'Mean Look', Type: 'Normal' },
          { Attack: 'Hypnosis', Type: 'Psychic' },
          { Attack: 'Dream Eater', Type: 'Psychic' }
        ]
      },
      {
        Name: 'Haunter',
        Img: 'Haunter.png',
        Gender: '♂',
        Level: '23',
        Types: ['Ghost', 'Poison'],
        Held: 'None',
        Moves: [
          { Attack: 'Spite', Type: 'Ghost' },
          { Attack: 'Mean Look', Type: 'Normal' },
          { Attack: 'Mimic', Type: 'Normal' },
          { Attack: 'Night Shade', Type: 'Ghost' }
        ]
      },
    ]
  }
}
