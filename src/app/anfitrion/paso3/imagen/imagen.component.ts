import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Router } from '@angular/router'; // Importa el servicio de enrutamiento

@Component({
  selector: 'app-imagen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css'] // Corregido: styleUrl -> styleUrls
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

  getImageUrl(image: File): string {
    return URL.createObjectURL(image);
  }

  navigateToInformacion() {
    console.log('Botón Comencemos clickeado');
    this.router.navigate(['/anfitrion/informacion']);
  }

  navigateToPaso3() {
    console.log('Botón Comencemos clickeado');
    this.router.navigate(['/anfitrion/paso3']);
  }
}
