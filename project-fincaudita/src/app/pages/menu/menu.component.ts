import { Component, ElementRef, ViewChild } from '@angular/core';
import { SvgsComponent } from "../svgs/svgs.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [SvgsComponent,RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @ViewChild('collapseOne') collapseOne: ElementRef | undefined;

  toggleAccordion() {
    if (this.collapseOne) {
      const collapseElement = this.collapseOne.nativeElement;
      const isCollapsed = collapseElement.classList.contains('show');
      if (isCollapsed) {
        collapseElement.classList.remove('show');
      } else {
        collapseElement.classList.add('show');
      }
    }
  }
  
}
