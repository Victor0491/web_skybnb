import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() alojamientos: any[] = [
    {
      nombre: 'Casa en la Playa',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 100000,
      region: 'Valparaiso',
      imagenes: ['https://plus.unsplash.com/premium_photo-1678286771082-4de8d1e4b649?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWxvamFtaWVudG9zJTIwcGxheWF8ZW58MHx8MHx8fDA%3D', 'https://plus.unsplash.com/premium_photo-1680287296835-0424869199ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFsb2phbWllbnRvcyUyMHBsYXlhfGVufDB8fDB8fHww', 'https://images.unsplash.com/photo-1495822892661-2ead864e1c7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D','https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ1fHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D']
    },
    {
      nombre: 'Casa en la Playa',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 100000,
      region: 'Valparaiso',
      imagenes: ['https://plus.unsplash.com/premium_photo-1678286771082-4de8d1e4b649?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWxvamFtaWVudG9zJTIwcGxheWF8ZW58MHx8MHx8fDA%3D', 'https://plus.unsplash.com/premium_photo-1680287296835-0424869199ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFsb2phbWllbnRvcyUyMHBsYXlhfGVufDB8fDB8fHww', 'https://images.unsplash.com/photo-1495822892661-2ead864e1c7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D','https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ1fHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D']
    },
    {
      nombre: 'Casa en la Playa',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 100000,
      region: 'Valparaiso',
      imagenes: ['https://plus.unsplash.com/premium_photo-1678286771082-4de8d1e4b649?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWxvamFtaWVudG9zJTIwcGxheWF8ZW58MHx8MHx8fDA%3D', 'https://plus.unsplash.com/premium_photo-1680287296835-0424869199ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFsb2phbWllbnRvcyUyMHBsYXlhfGVufDB8fDB8fHww', 'https://images.unsplash.com/photo-1495822892661-2ead864e1c7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D','https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ1fHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D']
    },
    {
      nombre: 'Casa en la Playa',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 100000,
      region: 'Valparaiso',
      imagenes: ['https://plus.unsplash.com/premium_photo-1678286771082-4de8d1e4b649?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWxvamFtaWVudG9zJTIwcGxheWF8ZW58MHx8MHx8fDA%3D', 'https://plus.unsplash.com/premium_photo-1680287296835-0424869199ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFsb2phbWllbnRvcyUyMHBsYXlhfGVufDB8fDB8fHww', 'https://images.unsplash.com/photo-1495822892661-2ead864e1c7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D','https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ1fHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D']
    },
    {
      nombre: 'Casa en la Playa',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 100000,
      region: 'Valparaiso',
      imagenes: ['https://plus.unsplash.com/premium_photo-1678286771082-4de8d1e4b649?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWxvamFtaWVudG9zJTIwcGxheWF8ZW58MHx8MHx8fDA%3D', 'https://plus.unsplash.com/premium_photo-1680287296835-0424869199ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFsb2phbWllbnRvcyUyMHBsYXlhfGVufDB8fDB8fHww', 'https://images.unsplash.com/photo-1495822892661-2ead864e1c7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D','https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ1fHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D']
    },
    {
      nombre: 'Casa en la Playa',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 100000,
      region: 'Valparaiso',
      imagenes: ['https://plus.unsplash.com/premium_photo-1678286771082-4de8d1e4b649?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWxvamFtaWVudG9zJTIwcGxheWF8ZW58MHx8MHx8fDA%3D', 'https://plus.unsplash.com/premium_photo-1680287296835-0424869199ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFsb2phbWllbnRvcyUyMHBsYXlhfGVufDB8fDB8fHww', 'https://images.unsplash.com/photo-1495822892661-2ead864e1c7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D','https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ1fHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D']
    },
    {
      nombre: 'Casa en la Playa',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 100000,
      region: 'Valparaiso',
      imagenes: ['https://plus.unsplash.com/premium_photo-1678286771082-4de8d1e4b649?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWxvamFtaWVudG9zJTIwcGxheWF8ZW58MHx8MHx8fDA%3D', 'https://plus.unsplash.com/premium_photo-1680287296835-0424869199ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFsb2phbWllbnRvcyUyMHBsYXlhfGVufDB8fDB8fHww', 'https://images.unsplash.com/photo-1495822892661-2ead864e1c7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D','https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ1fHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D']
    },
    {
      nombre: 'Casa en la Playa',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 100000,
      region: 'Valparaiso',
      imagenes: ['https://plus.unsplash.com/premium_photo-1678286771082-4de8d1e4b649?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWxvamFtaWVudG9zJTIwcGxheWF8ZW58MHx8MHx8fDA%3D', 'https://plus.unsplash.com/premium_photo-1680287296835-0424869199ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFsb2phbWllbnRvcyUyMHBsYXlhfGVufDB8fDB8fHww', 'https://images.unsplash.com/photo-1495822892661-2ead864e1c7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D','https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ1fHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D']
    },
    /*{
      imagen: "https://images.unsplash.com/photo-1609319172668-8b4f021f3b7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFsb2phbWllbnRvc3xlbnwwfHwwfHx8MA%3D%3D",
      nombre: 'Casa en el bosque',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 300000,
      region: 'Maule',
    },
    {
      imagen: "https://plus.unsplash.com/premium_photo-1681922761648-d5e2c3972982?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FiYSVDMyVCMWFzfGVufDB8fDB8fHww",
      nombre: 'Casa en la Playa',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 70000,
      region: 'Valparaiso',
    },
    {
      imagen: "https://images.unsplash.com/photo-1537197518227-a36efeafd477?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhYmElQzMlQjFhc3xlbnwwfHwwfHx8MA%3D%3D",
      nombre: 'Casa en la montaña',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 300000,
      region: 'Puerto Natales',
    },
    {
      imagen: "https://images.unsplash.com/photo-1622315173972-2bee16732128?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNhYmElQzMlQjFhc3xlbnwwfHwwfHx8MA%3D%3D",
      nombre: 'Casa en el lago',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 200000,
      region: 'La Araucanía',
    },*/
  ]
}
