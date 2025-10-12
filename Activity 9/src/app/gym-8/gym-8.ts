import { Component } from '@angular/core';
import { JohtoGym } from '../johto-gym';

@Component({
  selector: 'app-gym-8',
  standalone: false,
  templateUrl: './gym-8.html',
  styleUrl: './gym-8.css'
})
export class Gym8 {
  gymInfo: any
  
  constructor(private gym: JohtoGym){}

  ngOnInit(): void{
    this.gymInfo = this.gym.getGym8Info();
  }
}
