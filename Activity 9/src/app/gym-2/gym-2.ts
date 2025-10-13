import { Component } from '@angular/core';
import { JohtoGym } from '../johto-gym';

@Component({
  selector: 'app-gym-2',
  standalone: false,
  templateUrl: './gym-2.html',
  styleUrl: './gym-2.css'
})
export class Gym2 {
  gymInfo: any

  constructor(private gym: JohtoGym){}

  ngOnInit(): void{
    this.gymInfo = this.gym.getGym2Info();
  }
}
