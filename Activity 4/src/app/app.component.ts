import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  colors = ['#ff5733','#33ff57', '#3357ff', '#f3ff33', '#ff33f5', '#33fff5'];

  currentColorIndex = signal(0);
  currentColor = signal(this.colors[0]);

  changeColor() {
    // Calculating the next index of colors
    const nextIndex = (this.currentColorIndex() + 1) % this.colors.length;

    this.currentColorIndex.set(nextIndex);
    this.currentColor.set(this.colors[nextIndex]);
  }
}
