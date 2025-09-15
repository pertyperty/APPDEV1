import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  warrantyInfo = warrantyInfo;
  contactDetails = contactDetails;
  thankYouMessage = thankYouMessage;
}

export const warrantyInfo = {
  period: '2 years from the date of purchase',
  support: 'For assistance, contact customer support via the manufacturer’s website or call the support hotline at 1-800-555-1234.'
};

export const contactDetails = {
  website: 'www.keyboardcompany.com',
  email: 'support@keyboardcompany.com',
  hotline: '1-800-555-1234'
};

export const thankYouMessage = 'Thank you for choosing the KB-X1000. We hope you enjoy your new keyboard! Type Safe!';

