import { Component } from '@angular/core';
import { SvgsComponent } from "../svgs/svgs.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CdkAccordionModule } from '@angular/cdk/accordion'; // Importa el módulo del acordeón

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [SvgsComponent,RouterOutlet, RouterLink, RouterLinkActive, CdkAccordionModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  tabs = [
    { title: 'Role', content: 'Content for Role' },
    { title: 'User', content: 'Content for User' },
    { title: 'Modulo', content: 'Content for Modulo' },
    { title: 'View', content: 'Content for View' },
    { title: 'Person', content: 'Content for Person' },
  ];

  
}
