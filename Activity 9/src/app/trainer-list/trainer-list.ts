import { Component } from '@angular/core';
import { InputForms, Trainer } from '../input-forms';

@Component({
  selector: 'app-trainer-list',
  standalone: false,
  templateUrl: './trainer-list.html',
  styleUrl: './trainer-list.css'
})
export class TrainerList {
  constructor(private inputForm: InputForms) {}

  get trainers(): Trainer[] {
    return this.inputForm.getTrainers();
  }
}
