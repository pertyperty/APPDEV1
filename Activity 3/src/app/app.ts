import { AfterViewInit, Component, HostListener, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements AfterViewInit{
  protected readonly title = signal('Keyboard-Docu');

  private cursor!: HTMLElement;

  private mouseX = 0;
  private mouseY = 0;

  private cursorX = 0;
  private cursorY = 0;

  ngOnInit() {
    this.cursor = document.getElementById('cursor')!;

    const animate = () => {
      this.cursorX += (this.mouseX - this.cursorX) * 0.15;
      this.cursorY += (this.mouseY - this.cursorY) * 0.15;

      this.cursor.style.transform = `translate(${this.cursorX - 10}px, ${this.cursorY - 10}px)`;

      requestAnimationFrame(animate);
    };
    animate();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  }

  activeSection: string = 'home';

  ngAfterViewInit(): void {
    const sections = document.querySelectorAll('app-home, app-features, app-guide, app-support, app-contact');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
  }

  scrollTo(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth'});
  }
}
