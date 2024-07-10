import { Component,OnInit } from '@angular/core';
import Swal from 'sweetalert2'; // Importa SweetAlert2
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
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {
  formData = {
    imagenes: [] as string[]
  };

  selectedFiles: FileList | null = null;
  uploadedImages: { file: File, base64: string }[] = [];

  constructor(private router: Router, private formalojamiento: FormAlojamientoService) {
  
  }

  ngOnInit(): void {
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
      const img = new Image();
      img.src = reader.result as string;
      img.onload = (): void => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
  
        // Define el tamaño al que quieres redimensionar la imagen
        const maxWidth = 800; // Ancho máximo
        const maxHeight = 800; // Alto máximo
  
        let width = img.width;
        let height = img.height;
  
        // Calcular las nuevas dimensiones
        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }
  
        canvas.width = width;
        canvas.height = height;
  
        ctx!.drawImage(img, 0, 0, width, height);
  
        // Aquí puedes ajustar la calidad de la imagen
        const quality = 0.6; // Calidad del 0 al 1
        const base64String = canvas.toDataURL('image/jpeg', quality);
  
        this.uploadedImages[index].base64 = base64String;
        console.log(base64String); // Aquí puedes ver la imagen en base64
  
        // Crea un objeto con claves específicas para cada imagen
        const imagesData: ImagesData = this.uploadedImages.reduce((acc, image, idx) => {
          const key = `image${idx + 1}`; // Esto creará claves como 'image1', 'image2', etc.
          acc[key] = image.base64;
          return acc;
        }, {} as ImagesData); // Usa la interfaz ImagesData para el objeto acumulador
  
        // Actualiza formData con el objeto de imágenes
        this.formalojamiento.updateFormState({ imagenes: imagesData });
      };
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