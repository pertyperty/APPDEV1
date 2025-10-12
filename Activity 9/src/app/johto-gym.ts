import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JohtoGym {
  constructor() {}
  
  getGym1Info() {
    return [
      {
        Leader: 'Falkner', LeaderArt: "VSFalkner.png",
        Badge: "Zephyr Badge", BadgeArt: "Zephyr_Badge.png",
        Specialty: "Flying", 
        Gym: "Violet Gym", City: "Violet City",
        AdditionalNotes: [],
        PokemonParty: {
          Pokemon: [
            {
              Name: 'Pidgey', Img: 'Pidgey.png',
              Gender: '♂', Level: '7', Held: 'None',
              Types: ['Normal', 'Flying'],
              Moves: [
                { Attack: 'Scratch', Type: 'Normal' },
                { Attack: 'Mud-Slap', Type: 'Ground' },
                { Attack: '⠀', Type: '⠀' },
                { Attack: '⠀', Type: '⠀' }
              ]
            },
            {
              Name: 'Pidgeotto', Img: 'Pidgeotto.png',
              Gender: '♂', Level: '9', Held: 'None',
              Types: ['Normal', 'Flying'],
              Moves: [
                { Attack: 'Tackle', Type: 'Normal' },
                { Attack: 'Gust', Type: 'Flying' },
                { Attack: 'Mud-Slap', Type: 'Ground' },
                { Attack: '⠀', Type: '⠀' },
              ]
            },
          ]
        }
      }
    ]
  }

  getGym2Info() {
    return [
      {        
        Leader: "Bugsy", LeaderArt: "VSBugsy.png",
        Badge: "Hive Badge", BadgeArt: "Hive_Badge.png",
        Specialty: "Bug",
        Gym: "Azalea Gym", City: "Azalea Town",
        AdditionalNotes: [],
        PokemonParty: {
          Pokemon: [
            {
              Name: 'Metapod', Img: 'Metapod.png',
              Gender: '♂', Level: '14', Held: 'None',
              Types: ['Bug'],
              Moves: [
                { Attack: 'Tackle', Type: 'Normal' },
                { Attack: 'String Shot', Type: 'Bug' },
                { Attack: 'Harden', Type: 'Normal' },
                { Attack: '⠀', Type: '⠀' }
              ]
            },
            {
              Name: 'Kakuna', Img: 'Kakuna.png',
              Gender: '♂', Level: '14',
              Types: ['Bug', 'Poison'],
              Held: 'None',
              Moves: [
                { Attack: 'Poison String', Type: 'Poison' },
                { Attack: 'String Shot', Type: 'Bug' },
                { Attack: 'Harden', Type: 'Normal' },
                { Attack: '⠀', Type: '⠀' },
              ]
            },
            {
              Name: 'Scyther', Img: 'Scyther.png',
              Gender: '♂', Level: '16',
              Types: ['Bug', 'Flying'],
              Held: 'None',
              Moves: [
                { Attack: 'Fury Cutter', Type: 'Bug' },
                { Attack: 'Quick Attack', Type: 'Normal' },
                { Attack: 'Leer', Type: 'Normal' },
                { Attack: '⠀', Type: '⠀' },
              ]
            },
          ]
        }
      }
    ]
  }

  getGym3Info() {
    return [
      {
        Leader: "Whitney", LeaderArt: "VSWhitney.png",
        Badge: "Plain Badge", BadgeArt: "Plain_Badge.png",
        Specialty: "Normal", 
        Gym: "Goldenrod Gym", City: "Goldenrod City",
        AdditionalNotes: [],
        PokemonParty: {
          Pokemon: [
            {
              Name: 'Clefairy', Img: 'Clefairy.png',
              Gender: '♀', Level: '18', Held: 'None',
              Types: ['Normal'],
              Moves: [
                { Attack: 'Encore', Type: 'Normal' },
                { Attack: 'Mimic', Type: 'Normal' },
                { Attack: 'DoubleSlap', Type: 'Normal' },
                { Attack: 'Metronome', Type: 'Normal' }
              ]
            },
            {
              Name: 'Miltank', Img: 'Miltank.png',
              Gender: '♀', Level: '20', Held: 'None',
              Types: ['Normal'],
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
    ]
  }

  getGym4Info() {
    return [
      {
        Leader: "Morty", LeaderArt: "VSMorty.png",
        Badge: "Fog Badge", BadgeArt: "Fog_Badge.png",
        Specialty: "Ghost", 
        Gym: "Ecruteak Gym", City: "Ecruteak City",
        AdditionalNotes: [],
        PokemonParty: {
          Pokemon: [
            {
              Name: 'Gastly', Img: 'Gastly.png',
              Gender: '♂', Level: '21', Held: 'None',
              Types: ['Ghost', 'Poison'],
              Moves: [
                { Attack: 'Lick', Type: 'Ghost' },
                { Attack: 'Spite', Type: 'Ghost' },
                { Attack: 'Mean Look', Type: 'Normal' },
                { Attack: 'Curse', Type: '???' }
              ]
            },
            {
              Name: 'Haunter', Img: 'Haunter.png',
              Gender: '♂', Level: '21', Held: 'None',
              Types: ['Ghost', 'Poison'],
              Moves: [
                { Attack: 'Hypnosis', Type: 'Psychic' },
                { Attack: 'Curse', Type: '???' },
                { Attack: 'Mimic', Type: 'Normal' },
                { Attack: 'Night Shade', Type: 'Ghost' }
              ]
            },
            {
              Name: 'Gengar', Img: 'Gengar.png',
              Gender: '♂', Level: '25', Held: 'None',
              Types: ['Ghost', 'Poison'],
              Moves: [
                { Attack: 'Shadow Ball', Type: 'Ghost' },
                { Attack: 'Mean Look', Type: 'Normal' },
                { Attack: 'Hypnosis', Type: 'Psychic' },
                { Attack: 'Dream Eater', Type: 'Psychic' }
              ]
            },
            {
              Name: 'Haunter', Img: 'Haunter.png',
              Gender: '♂', Level: '23', Held: 'None',
              Types: ['Ghost', 'Poison'],
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
    ]
  }

  getGym5Info() {
    return [
      {
        Leader: "Chuck", LeaderArt: "VSChuck.png",
        Badge: "Storm Badge", BadgeArt: "Storm_Badge.png",
        Specialty: "Fighting",
        Gym: "Cianwood Gym", City: "Cianwood City",
        AdditionalNotes: ["Additional Notes:", "Chuck has a Full Heal."],
        PokemonParty: {
          Pokemon: [
            {
              Name: 'Primeape', Img: 'Primeape.png',
              Gender: '♂', Level: '27', Held: 'None',
              Types: ['Fighting'], 
              Moves: [
                { Attack: 'Leer', Type: 'Normal' },
                { Attack: 'Rage', Type: 'Normal' },
                { Attack: 'Karate Chop', Type: 'Fighting' },
                { Attack: 'Fury Swipes', Type: 'Normal' }
              ]
            },
            {
              Name: 'Poliwrath', Img: 'Poliwrath.png',
              Gender: '♂', Level: '30', Held: 'None',
              Types: ['Water', 'Fighting'],
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
    ]
  }

  getGym6Info() {
    return [
      {
        Leader: "Jasmine", LeaderArt: "VSJasmine.png",
        Badge: "Mineral Badge", BadgeArt: "Mineral_Badge.png",
        Specialty: "Steel", 
        Gym: "Olivine Gym", City: "Olivine City",
        AdditionalNotes: ["Additional Note:","Jasmine has a Hyper Potion"],
        PokemonParty: {
          Pokemon: [
            {
              Name: 'Magnemite', Img: 'Magnemite.png',
              Gender: '', Level: '30',  Held: 'None',
              Types: ['Electric', 'Steel'],
              Moves: [
                { Attack: 'Thunderbolt', Type: 'Electric' },
                { Attack: 'Supersonic', Type: 'Normal' },
                { Attack: 'Sonic Boom', Type: 'Normal' },
                { Attack: 'Thunder Wave', Type: 'Electric' }
              ]
            },
            {
              Name: 'Magnemite', Img: 'Magnemite.png',
              Gender: '', Level: '30',  Held: 'None',
              Types: ['Electric', 'Steel'],
              Moves: [
                { Attack: 'Thunderbolt', Type: 'Electric' },
                { Attack: 'Supersonic', Type: 'Normal' },
                { Attack: 'Sonic Boom', Type: 'Normal' },
                { Attack: 'Thunder Wave', Type: 'Electric' }
              ]
            },
            {
              Name: 'Steelix', Img: 'Steelix.png',
              Gender: '♂', Level: '35',  Held: 'None',
              Types: ['Steel', 'Ground'],
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
    ]
  }

  getGym7Info() {
    return [
      {
        Leader: "Pryce", LeaderArt: "VSPryce.png",
        Badge: "Glacier Badge", BadgeArt: "Glacier_Badge.png",
        Specialty: "Ice", 
        Gym: "Mahogany Gym", City: "Mahogany Town",
        AdditionalNotes: ["Additional Note:","Pryce has a Hyper Potion"],
        PokemonParty: {
          Pokemon: [
            {
              Name: 'Seel', Img: 'Seel.png',
              Gender: '♂', Level: '27', Held: 'None',
              Types: ['Water'],
              Moves: [
                { Attack: 'Headbutt', Type: 'Normal' },
                { Attack: 'Icy Wind', Type: 'Ice' },
                { Attack: 'Aurora Beam', Type: 'Ice' },
                { Attack: 'Rest', Type: 'Psychic' }
              ]
            },
            {
              Name: 'Dewgong', Img: 'Dewgong.png',
              Gender: '♂', Level: '29', Held: 'None',
              Types: ['Water', 'Ice'],
              Moves: [
                { Attack: 'Headbutt', Type: 'Normal' },
                { Attack: 'Icy Wind', Type: 'Ice' },
                { Attack: 'Aurora Beam', Type: 'Ice' },
                { Attack: 'Rest', Type: 'Psychic' }
              ]
            },
            {
              Name: 'Piloswine', Img: 'Piloswine.png',
              Gender: '♂', Level: '31', Held: 'None',
              Types: ['Ice', 'Ground'],
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
    ]
  }

  getGym8Info() {
    return [
      {
        Leader: "Clair", LeaderArt: "VSClair.png",
        Badge: "Rising Badge", BadgeArt: "Rising_Badge.png",
        Specialty: "Dragon",
        Gym: "Blackthorn Gym", City: "Blackthorn City",
        AdditionalNotes: ["Additional Note:","Clair has a Full Heal and a Full Restore"],
        PokemonParty: {
          Pokemon: [
            {
              Name: 'Dragonair', Img: 'Dragonair.png',
              Gender: '♀', Level: '37', Held: 'None',
              Types: ['Dragon'],
              Moves: [
                { Attack: 'Surf', Type: 'Water' },
                { Attack: 'Slam', Type: 'Normal' },
                { Attack: 'Thunder Wave', Type: 'Electric' },
                { Attack: 'Dragon Breath', Type: 'Dragon' }
              ]
            },
            {
              Name: 'Dragonair', Img: 'Dragonair.png',
              Gender: '♀', Level: '37', Held: 'None',
              Types: ['Dragon'],
              Moves: [
                { Attack: 'Thunderbolt', Type: 'Electric' },
                { Attack: 'Slam', Type: 'Normal' },
                { Attack: 'Thunder Wave', Type: 'Electric' },
                { Attack: 'Dragon Breath', Type: 'Dragon' }
              ]
            },
            {
              Name: 'Dragonair', Img: 'Dragonair.png',
              Gender: '♀', Level: '37', Held: 'None',
              Types: ['Dragon'],
              Moves: [
                { Attack: 'Ice Beam', Type: 'Ice' },
                { Attack: 'Slam', Type: 'Normal' },
                { Attack: 'Thunder Wave', Type: 'Electric' },
                { Attack: 'Dragon Breath', Type: 'Dragon' }
              ]
            },
            {
              Name: 'Kingdra', Img: 'Kingdra.png',
              Gender: '♀', Level: '40', Held: 'None',
              Types: ['Water', 'Dragon'],
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
    ]
  }
}
