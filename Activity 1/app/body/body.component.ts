import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: false,
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  
  // Array of Colors

  colors: string[] = ['#2c3e50','#e74c3c','#3498db','#9b59b6','#1abc9c','#f39c12']
  currentColorIndex: number = 0;

  // Func to change color of name

  changeNameColor()
  {
    this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
  }

  // Get current color

  get currentColor(): string
  {
    return this.colors
    [this.currentColorIndex];
  }

  // Main body
  profile = 
  {
    name: 'Rupert C. dela Cruz',
    title: '(0.)10x Developer',
    about: 'Passionate about creating beautiful and fuctional applications. Extremely Cooked and is mentally (un)stable',
    skills: 
    ['Angular', 'Typescript', 'HTML/CSS', 'Responsive Design'],
    experience: 
    [
      {
        role: 'Web Developer',
        company: 'Tech Solutions',
        period: '2022 - Present',
        description: 'Developing and maintaining web applications using Angular and related technologies'
      },
      {
        role: 'Frontend Intern',
        company: 'Digital Creations',
        period: '2021 - 2022',
        description: 'Assisted in building responsive user interfaces and implementing new features',
      },
    ],
    education: 
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Baguio',
      year: '2027'
    },
    contact: 
    {
      email: 'rupertdelacruz@gmail.com',
      phone: '+1 (555) 123-4567',
      location: 'Tokyo, Japan'
    }
  }

}
