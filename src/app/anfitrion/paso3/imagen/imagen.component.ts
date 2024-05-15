import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Router } from '@angular/router'; // Importa el servicio de enrutamiento

@Component({
  selector: 'app-imagen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imagen.component.html',
  styleUrl: './imagen.component.css'
})
export class ImagenComponent {
  constructor(private router: Router) {}
  selectedFiles: FileList | null = null;
  uploadedImages: File[] = [];

  onFileSelected(event: any): void {
    this.selectedFiles = event.target.files;
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        const file = this.selectedFiles[i];
        // Verificar que sean imágenes antes de agregarlas a la lista
        if (file.type.startsWith('image/')) {
          this.uploadedImages.push(file);
        }
      }
    }
  }

  getImageUrl(image: File): string {
    return URL.createObjectURL(image);
  }
  navigateToInformacion() {
    console.log('Botón Comencemos clickeado');
    this.router.navigate(['/anfitrion/informacion']);
  }
}