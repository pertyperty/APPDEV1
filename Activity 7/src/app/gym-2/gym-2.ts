import { Component } from '@angular/core';

@Component({
  selector: 'app-gym-2',
  standalone: false,
  templateUrl: './gym-2.html',
  styleUrl: './gym-2.css'
})
export class Gym2 {
  Leader = "Bugsy";
  LeaderArt = "VSBugsy.png";
  Badge = "Hive Badge";
  BadgeArt = "Hive_Badge.png";
  Specialty = "Bug"; 
  Gym = "Azalea Gym";
  AdditionalNotes = [];
  PokemonParty = {
    Pokemon: [
      {
        Name: 'Metapod',
        Img: 'Metapod.png',
        Gender: '♂',
        Level: '14',
        Types: ['Bug'],
        Held: 'None',
        Moves: [
          { Attack: 'Tackle', Type: 'Normal' },
          { Attack: 'String Shot', Type: 'Bug' },
          { Attack: 'Harden', Type: 'Normal' },
          { Attack: ' ', Type: ' ' }
        ]
      },
      {
        Name: 'Kakuna',
        Img: 'Kakuna.png',
        Gender: '♂',
        Level: '14',
        Types: ['Bug', 'Poison'],
        Held: 'None',
        Moves: [
          { Attack: 'Poison String', Type: 'Poison' },
          { Attack: 'String Shot', Type: 'Bug' },
          { Attack: 'Harden', Type: 'Normal' },
          { Attack: ' ', Type: ' ' },
        ]
      },
      {
        Name: 'Scyther',
        Img: 'Scyther.png',
        Gender: '♂',
        Level: '16',
        Types: ['Bug', 'Flying'],
        Held: 'None',
        Moves: [
          { Attack: 'Fury Cutter', Type: 'Bug' },
          { Attack: 'Quick Attack', Type: 'Normal' },
          { Attack: 'Leer', Type: 'Normal' },
          { Attack: ' ', Type: ' ' },
        ]
      },
    ]
  }
}
