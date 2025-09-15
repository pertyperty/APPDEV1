import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: false,
  templateUrl: './features.html',
  styleUrl: './features.css'
})
export class Features {
  specifications = specifications;
  inTheBox = inTheBox;
  keyFeatures = keyFeatures;
}

export const specifications = [
  { label: 'Switch Type', value: 'Cherry MX Red (Mechanical)' },
  { label: 'Key Layout', value: 'Full-size (104 keys)' },
  { label: 'Backlighting', value: 'RGB with customizable colors' },
  { label: 'Connectivity', value: 'Wired (USB 2.0)' },
  { label: 'Dimensions', value: '440 mm x 135 mm x 35 mm' },
  { label: 'Weight', value: '1.2 kg' },
  { label: 'Cable Length', value: '1.8 meters' },
  { label: 'Additional Features', value: 'Anti-ghosting, N-key rollover, dedicated media controls' }
];

export const inTheBox = [
  'KB-X1000 Keyboard',
  'USB Cable',
  'User Manual',
  'Keycap Removal Tool',
  'Warranty Card'
];

export const keyFeatures = [
  {
    title: 'Customizable RGB Backlighting',
    description: 'Personalize the keyboard’s illumination with a wide range of colors and lighting effects.'
  },
  {
    title: 'Mechanical Switches',
    description: 'Cherry MX Red switches for a responsive and smooth typing experience.'
  },
  {
    title: 'Programmable Keys',
    description: 'Assign macros and custom functions to any key with the included software.'
  },
  {
    title: 'Anti-Ghosting & N-Key Rollover',
    description: 'Ensure accurate keypress registration during intense gaming sessions.'
  },
  {
    title: 'Dedicated Media Controls',
    description: 'Easily control music and videos with dedicated media keys.'
  }
];
