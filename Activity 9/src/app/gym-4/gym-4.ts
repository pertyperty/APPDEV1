import { Component } from '@angular/core';
import { JohtoGym } from '../johto-gym';

@Component({
  selector: 'app-gym-4',
  standalone: false,
  templateUrl: './gym-4.html',
  styleUrl: './gym-4.css'
})
export class Gym4 {
  gymInfo: any

  constructor(private gym: JohtoGym){}

  ngOnInit(): void{
    this.gymInfo = this.gym.getGym4Info();
  }
}
