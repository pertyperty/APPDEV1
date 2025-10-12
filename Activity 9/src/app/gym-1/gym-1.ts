import { Component } from '@angular/core';
import { JohtoGym } from '../johto-gym';

@Component({
  selector: 'app-gym-1',
  standalone: false,
  templateUrl: './gym-1.html',
  styleUrl: './gym-1.css'
})
export class Gym1 {
  gymInfo: any

  constructor(private gym: JohtoGym){}

  ngOnInit(): void{
    this.gymInfo = this.gym.getGym1Info();
  }
}
