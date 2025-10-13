import { Component } from '@angular/core';
import { JohtoGym } from '../johto-gym';

@Component({
  selector: 'app-gym-6',
  standalone: false,
  templateUrl: './gym-6.html',
  styleUrl: './gym-6.css'
})
export class Gym6 {
  gymInfo: any

  constructor(private gym: JohtoGym){}

  ngOnInit(): void{
    this.gymInfo = this.gym.getGym6Info();
  }
}