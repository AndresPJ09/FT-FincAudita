import { Component } from '@angular/core';
import { HomeComponent } from "./pages/home/home.component";
import { MenuComponent } from "./pages/menu/menu.component";
import { SecurityComponent } from './pages/security/security.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, MenuComponent, SecurityComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-fincaudita';
}