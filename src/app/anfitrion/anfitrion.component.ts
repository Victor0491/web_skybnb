import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ModalComponent } from '../shared/components/modal/modal.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-anfitrion',
  templateUrl: './anfitrion.component.html',
  imports: [CommonModule,RouterLink,],
  standalone: true,
  styleUrls: ['./anfitrion.component.css']
})
export class AnfitrionComponent implements OnInit  {

  constructor(private router: Router ) {}

  ngOnInit(): void {
    // Aquí puedes cargar tu modal o alerta al iniciar el componente
    
  }



  navigateToPaso1() {
    console.log('Botón Comencemos clickeado');
    this.router.navigate(['/paso1']);
  }
}
