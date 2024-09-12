import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TP-FrontEnd';

  menuItems = [
    { label: 'Libros', icon: 'fa-solid fa-book' },
    { label: 'Préstamos', icon: 'fa-solid fa-clipboard' },
    { label: 'Editoriales', icon: 'fa-solid fa-stamp' },
    { label: 'Autores', icon: 'fa-solid fa-feather' },
    { label: 'Sanciones', icon: '' },
  ];
  activeIndex: number = 0;
  setActive(index: number) {
    this.activeIndex = index;
  }
  sidebarActive = false;

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }
}
