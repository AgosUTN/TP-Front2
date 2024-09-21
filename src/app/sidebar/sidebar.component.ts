import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  menuItems = [
    { label: 'Libros', icon: 'fa-solid fa-book', url: '' },
    { label: 'Préstamos', icon: 'fa-solid fa-clipboard', url: '/prestamoAlta' },
    { label: 'Editoriales', icon: 'fa-solid fa-stamp', url: '/editorialAlta' },
    { label: 'Autores', icon: 'fa-solid fa-feather', url: '' },
    { label: 'Sanciones', icon: '', url: '' },
  ];

  @Input() sidebarActive = false;

  activeIndex: number = 0;
  setActive(index: number) {
    this.activeIndex = index;
  }
}
