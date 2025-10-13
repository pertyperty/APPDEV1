import { Component, signal } from '@angular/core';
import { Gym1 } from './gym-1/gym-1';
import { Gym2 } from './gym-2/gym-2';
import { Gym3 } from './gym-3/gym-3';
import { Gym4 } from './gym-4/gym-4';
import { Gym5 } from './gym-5/gym-5';
import { Gym6 } from './gym-6/gym-6';
import { Gym7 } from './gym-7/gym-7';
import { Gym8 } from './gym-8/gym-8';
import { TrainerForm } from './trainer-form/trainer-form';
import { TrainerList } from './trainer-list/trainer-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('activity-7');

  SidebarTitle = "Gym Leaders";
  TitleEn = "Activity 9";
  TitleJp = " ";
  onRouteActivate(component: any) {
    if (component instanceof Gym1) {
      this.TitleEn = "Violet City";
      this.TitleJp = "キキョウシティ";
    } else if (component instanceof Gym2) {
      this.TitleEn = "Azalea Town";
      this.TitleJp = "ヒワダタウン";
    } else if (component instanceof Gym3) {
      this.TitleEn = "Goldenrod City";
      this.TitleJp = "コガネシティ";
    } else if (component instanceof Gym4) {
      this.TitleEn = "Ecruteak City";
      this.TitleJp = "エンジュシティ";
    } else if (component instanceof Gym5) {
      this.TitleEn = "Cianwood City";
      this.TitleJp = "タンバシティ";
    } else if (component instanceof Gym6) {
      this.TitleEn = "Olivine City";
      this.TitleJp = "アサギシティ";
    } else if (component instanceof Gym7) {
      this.TitleEn = "Mahogany Town";
      this.TitleJp = "チョウジタウン";
    } else if (component instanceof Gym8) {
      this.TitleEn = "Blackthorn City";
      this.TitleJp = "フスベシティ";
    } else if (component instanceof TrainerForm) {
      this.TitleEn = "Add Trainers"
      this.TitleJp = "⠀";
    } else if (component instanceof TrainerList) {
      this.TitleEn = "Trainer List"
      this.TitleJp = "⠀";
    } else {
      this.TitleEn = "Home";
      this.TitleJp = "⠀";
    }
  }
}
