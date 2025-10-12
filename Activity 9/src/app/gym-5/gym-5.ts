import { Component } from '@angular/core';
import { JohtoGym } from '../johto-gym';

@Component({
  selector: 'app-gym-5',
  standalone: false,
  templateUrl: './gym-5.html',
  styleUrl: './gym-5.css'
})
export class Gym5 {
  gymInfo: any

  constructor(private gym: JohtoGym){}

  ngOnInit(): void{
    this.gymInfo = this.gym.getGym5Info();
  }
}
