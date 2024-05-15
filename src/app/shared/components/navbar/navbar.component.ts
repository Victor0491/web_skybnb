import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter  } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() modoAnfitrionClicked = new EventEmitter<void>();

  onModoAnfitrionClicked() {
    this.modoAnfitrionClicked.emit();
  }

}
