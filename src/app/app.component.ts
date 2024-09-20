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
    { label: 'Libros', icon: 'fa-solid fa-book', url: '' },
    { label: 'Préstamos', icon: 'fa-solid fa-clipboard', url: '/prestamoAlta' },
    { label: 'Editoriales', icon: 'fa-solid fa-stamp', url: '/editorialAlta' },
    { label: 'Autores', icon: 'fa-solid fa-feather', url: '' },
    { label: 'Sanciones', icon: '', url: '' },
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
