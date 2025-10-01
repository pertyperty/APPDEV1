import { Component } from '@angular/core';

@Component({
  selector: 'app-gym-5',
  standalone: false,
  templateUrl: './gym-5.html',
  styleUrl: './gym-5.css'
})
export class Gym5 {
  Leader = "Chuck";
  LeaderArt = "VSChuck.png";
  Badge = "Storm Badge";
  BadgeArt = "Storm_Badge.png";
  Specialty = "Fighting"; 
  Gym = "Cianwood Gym";
  AdditionalNotes = ["Additional Notes:", "Chuck has a Full Heal."];
  PokemonParty = {
    Pokemon: [
      {
        Name: 'Primeape',
        Img: 'Primeape.png',
        Gender: '♂',
        Level: '27',
        Types: ['Fighting'],
        Held: 'None',
        Moves: [
          { Attack: 'Leer', Type: 'Normal' },
          { Attack: 'Rage', Type: 'Normal' },
          { Attack: 'Karate Chop', Type: 'Fighting' },
          { Attack: 'Fury Swipes', Type: 'Normal' }
        ]
      },
      {
        Name: 'Poliwrath',
        Img: 'Poliwrath.png',
        Gender: '♂',
        Level: '30',
        Types: ['Water', 'Fighting'],
        Held: 'None',
        Moves: [
          { Attack: 'Hypnosis', Type: 'Psychic' },
          { Attack: 'Mind Reader', Type: 'Normal' },
          { Attack: 'Surf', Type: 'Water' },
          { Attack: 'Dynamic Punch', Type: 'Fighting' }
        ]
      },
    ]
  }
}
