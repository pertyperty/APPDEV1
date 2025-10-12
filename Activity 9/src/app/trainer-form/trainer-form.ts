import { Component } from '@angular/core';
import { InputForms } from '../input-forms';

@Component({
  selector: 'app-trainer-form',
  standalone: false,
  templateUrl: './trainer-form.html',
  styleUrls: ['./trainer-form.css']
})
export class TrainerForm {
  constructor(public inputForm: InputForms) {}

  onSubmit(): void {
    this.inputForm.addTrainer();
  }
}
