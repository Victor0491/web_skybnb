import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; // Importa SweetAlert2

@Component({
  selector: 'app-imagen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent {
  constructor(private router: Router) {}

  selectedFiles: FileList | null = null;
  uploadedImages: { file: File, base64: string }[] = [];

  onFileSelected(event: any): void {
    this.selectedFiles = event.target.files;
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        const file = this.selectedFiles[i];
        // Verificar que sean imágenes antes de agregarlas a la lista
        if (file.type.startsWith('image/')) {
          this.uploadedImages.push({ file: file, base64: '' });
          this.convertToBase64(file, i);
        }
      }
    }
  }

  convertToBase64(file: File, index: number): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (): void => {
      this.uploadedImages[index].base64 = reader.result as string;
      console.log(reader.result); // Aquí puedes ver la imagen en base64
    };
  }

  navigateToInformacion(): void {
    if (this.uploadedImages.length > 0) {
      this.router.navigate(['/anfitrion/informacion']);
    } else {
      Swal.fire({
        title: 'Atención',
        text: 'Por favor sube al menos una imagen antes de continuar.',
        icon: 'warning',
        confirmButtonText: 'Entendido',
        customClass: {
          popup: 'swal2-popup',
          title: 'swal2-title',
          confirmButton: 'swal2-confirm'
        }
      });
    }
  }

  navigateToPaso3(): void {
    this.router.navigate(['/anfitrion/paso3']);
  }
}
