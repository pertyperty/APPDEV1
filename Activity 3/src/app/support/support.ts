import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  standalone: false,
  templateUrl: './support.html',
  styleUrl: './support.css'
})
export class Support {
  troubleshooting = troubleshooting;
  maintenance = maintenance;
}

export const troubleshooting = [
  {
    section: 'Keyboard Not Responding',
    steps: [
      'Ensure the USB connection is secure.',
      'Try connecting the keyboard to a different USB port.',
      'Restart your computer if necessary.'
    ]
  },
  {
    section: 'Backlighting Not Working',
    steps: [
      'Check if the backlight is disabled or set to a minimal brightness level.',
      'Verify that the configuration software is properly installed.'
    ]
  },
  {
    section: 'Key Not Registering',
    steps: [
      'Confirm that no physical obstructions are affecting the key.',
      'Test the key in different applications to determine if the issue is software-related.'
    ]
  }
];

export const maintenance = [
  {
    section: 'Cleaning',
    steps: [
      'Disconnect the keyboard from the computer.',
      'Use a soft, dry cloth to clean the surface.',
      'For deeper cleaning, carefully remove keycaps and use compressed air to remove debris.'
    ]
  },
  {
    section: 'Storage',
    steps: [
      'Store the keyboard in a cool, dry place.',
      'Avoid exposure to liquids or extreme temperatures.'
    ]
  }
];

