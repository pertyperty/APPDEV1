import { Component } from '@angular/core';

@Component({
  selector: 'app-guide',
  standalone: false,
  templateUrl: './guide.html',
  styleUrl: './guide.css'
})
export class Guide {
  setupInstructions = setupInstructions;
  usageInstructions = usageInstructions;
}

export const setupInstructions = [
  {
    section: 'Unboxing',
    steps: [
      'Carefully remove the keyboard and accessories from the box.'
    ]
  },
  {
    section: 'Connecting the Keyboard',
    steps: [
      'Plug the USB cable into an available USB port on your computer.',
      'The keyboard should be automatically recognized and ready for use. No additional drivers are required.'
    ]
  },
  {
    section: 'Software Installation (Optional)',
    steps: [
      'Download the configuration software from the manufacturer’s website if you wish to customize key functions or lighting.',
      'Follow the on-screen instructions to install the software.'
    ]
  },
  {
    section: 'Keycap Removal and Replacement',
    steps: [
      'Use the included keycap removal tool to gently pry off keycaps for cleaning or replacement.',
      'Replace keycaps by aligning them over the switch and pressing down until they click into place.'
    ]
  }
];

export const usageInstructions = [
  {
    section: 'Basic Typing',
    steps: [
      'Simply start typing; the keyboard is pre-configured with standard key mappings.'
    ]
  },
  {
    section: 'Customizing Backlighting',
    steps: [
      'Press Fn + F9 to cycle through preset lighting effects.',
      'Use the configuration software to create custom lighting profiles.'
    ]
  },
  {
    section: 'Programming Keys',
    steps: [
      'Open the configuration software.',
      'Select the key you want to program.',
      'Assign a macro or function and save your changes.'
    ]
  },
  {
    section: 'Using Media Controls',
    steps: [
      'Use the dedicated media keys (Play/Pause, Volume Up/Down, Mute) for easy media control.'
    ]
  }
];


