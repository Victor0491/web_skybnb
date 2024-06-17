import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Router } from '@angular/router'; // Importa el servicio de enrutamiento
import { FormAlojamientoService } from '../../../core/service/alojamiento/form-alojamiento.service';

@Component({
  selector: 'app-imagen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css'] // Corregido: styleUrl -> styleUrls
})
export class ImagenComponent {
  formData = {
    imagenes: [] as string[]
  };

  selectedFiles: FileList | null = null;
  uploadedImages: { file: File, base64: string }[] = [];

  constructor(private router: Router, private formalojamiento: FormAlojamientoService) {
    const savedData = this.formalojamiento.getFormData();
    this.formData.imagenes = savedData.imagenes || [];
    this.uploadedImages = this.formData.imagenes.map(base64 => ({ file: null as any, base64 }));
  }

  onFileSelected(event: any): void {
    this.selectedFiles = event.target.files;
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        const file = this.selectedFiles[i];
        if (file.type.startsWith('image/')) {
          this.convertToBase64(file);
        }
      }
    }
  }

  convertToBase64(file: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (): void => {
      const base64String = reader.result as string;
      this.uploadedImages.push({ file: file, base64: base64String });
      this.formData.imagenes.push(base64String);
      this.formalojamiento.setFormData(this.formData);
    };
  }

  getImageUrl(image: File): string {
    return URL.createObjectURL(image);
  }

  navigateToInformacion() {
    this.formalojamiento.setFormData(this.formData);
    console.log('Botón Comencemos clickeado');
    this.router.navigate(['/anfitrion/informacion']);
  }

  navigateToPaso3() {
    this.formalojamiento.setFormData(this.formData);
    console.log('Botón Comencemos clickeado');
    this.router.navigate(['/anfitrion/paso3']);
  }
}
