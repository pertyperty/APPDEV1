import { Component } from '@angular/core';
import { JohtoGym } from '../johto-gym';

@Component({
  selector: 'app-gym-7',
  standalone: false,
  templateUrl: './gym-7.html',
  styleUrl: './gym-7.css'
})
export class Gym7 {
  gymInfo: any

  constructor(private gym: JohtoGym){}

  ngOnInit(): void{
    this.gymInfo = this.gym.getGym7Info();
  }
}