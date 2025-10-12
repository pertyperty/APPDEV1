import { Component } from '@angular/core';
import { JohtoGym } from '../johto-gym';

@Component({
  selector: 'app-gym-3',
  standalone: false,
  templateUrl: './gym-3.html',
  styleUrl: './gym-3.css'
})
export class Gym3 {
  gymInfo: any

  constructor(private gym: JohtoGym){}

  ngOnInit(): void{
    this.gymInfo = this.gym.getGym3Info();
  }
}
