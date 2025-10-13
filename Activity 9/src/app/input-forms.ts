import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

interface PokemonPartyFG {
  Pokemon1: FormControl<string>;
  Pokemon2: FormControl<string>;
  Pokemon3: FormControl<string>;
  Pokemon4: FormControl<string>;
  Pokemon5: FormControl<string>;
  Pokemon6: FormControl<string>;
}

interface TrainerFG {
  Name: FormControl<string>;
  Age: FormControl<string>;
  Address: FormControl<string>;
  PokemonParty: FormGroup<PokemonPartyFG>;
}

export interface Trainer {
  Name: string;
  Age: string;
  Address: string;
  PokemonParty: string[];
}

@Injectable({
  providedIn: 'root'
})

export class InputForms {
  trainers: Trainer[] =[];

  formGroup = new FormGroup<TrainerFG>({
    Name: new FormControl<string>('', { nonNullable: true }),
    Age: new FormControl<string>('', { nonNullable: true }),
    Address: new FormControl<string>('', { nonNullable: true }),
    PokemonParty: new FormGroup<PokemonPartyFG>({
      Pokemon1: new FormControl<string>('', { nonNullable: true }),
      Pokemon2: new FormControl<string>('', { nonNullable: true }),
      Pokemon3: new FormControl<string>('', { nonNullable: true }),
      Pokemon4: new FormControl<string>('', { nonNullable: true }),
      Pokemon5: new FormControl<string>('', { nonNullable: true }),
      Pokemon6: new FormControl<string>('', { nonNullable: true }),
    })
  });

  addTrainer() {
    const formValue = this.formGroup.getRawValue();
    const pokemonParty = Object.values(formValue.PokemonParty)
      .filter(p => p.trim() !== '')

    const newTrainer: Trainer = {
      Name: formValue.Name,
      Age: formValue.Age,
      Address: formValue.Address,
      PokemonParty: pokemonParty
    };

    this.trainers.push(newTrainer);
    this.formGroup.reset({
      Name: '',
      Age: '',
      Address: '',
      PokemonParty: {
        Pokemon1: '',
        Pokemon2: '',
        Pokemon3: '',
        Pokemon4: '',
        Pokemon5: '',
        Pokemon6: ''
      }
    })
  }

  getTrainers(): Trainer[] {
    return this.trainers;
  }
}
