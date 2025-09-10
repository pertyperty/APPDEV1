import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: false,
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  count: number = 0;

  increment() {
    this.count++;
  }
  
  decrement() { 
    this.count--;
  }

  reset() {
    this.count = 0;
  }

  random() {
    if (this.count > 0) {
      this.count = Math.floor(Math.random() * 101) - 100;
    } else if (this.count < 0) {
      this.count = Math.floor(Math.random() * 101);
    } else {
      this.count = Math.floor(Math.random() * 101);
    }
  }
}
