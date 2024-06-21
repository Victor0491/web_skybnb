import { Component } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; // Importa SweetAlert2
=======
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Router } from '@angular/router'; // Importa el servicio de enrutamiento
import { FormAlojamientoService } from '../../../core/service/alojamiento/form-alojamiento.service';


interface ImagesData {
  [key: string]: string; // Esto permite cualquier clave de tipo string con valor de tipo string
}
>>>>>>> 7c50df9e35c33003fb8120dfa34360783e1a7124

@Component({
  selector: 'app-imagen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
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
