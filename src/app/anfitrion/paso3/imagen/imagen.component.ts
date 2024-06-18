import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Router } from '@angular/router'; // Importa el servicio de enrutamiento
import { FormAlojamientoService } from '../../../core/service/alojamiento/form-alojamiento.service';


interface ImagesData {
  [key: string]: string; // Esto permite cualquier clave de tipo string con valor de tipo string
}

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

      // Crea un objeto con claves específicas para cada imagen
      const imagesData: ImagesData = this.uploadedImages.reduce((acc, image, idx) => {
        const key = `image${idx + 1}`; // Esto creará claves como 'image1', 'image2', etc.
        acc[key] = image.base64;
        return acc;
      }, {} as ImagesData); // Usa la interfaz ImagesData para el objeto acumulador

      // Actualiza formData con el objeto de imágenes
      this.formalojamiento.setFormData({ imagenes: imagesData });
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
