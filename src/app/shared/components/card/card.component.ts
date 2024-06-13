import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,RouterLink],
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
      imagenes: ['https://plus.unsplash.com/premium_photo-1678286771082-4de8d1e4b649?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWxvamFtaWVudG9zJTIwcGxheWF8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1680287296835-0424869199ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFsb2phbWllbnRvcyUyMHBsYXlhfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1495822892661-2ead864e1c7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ1fHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D']
    },
    {
      nombre: 'Casa en la Playa',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 100000,
      region: 'Valparaiso',
      imagenes: ['https://plus.unsplash.com/premium_photo-1678286771082-4de8d1e4b649?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWxvamFtaWVudG9zJTIwcGxheWF8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1680287296835-0424869199ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFsb2phbWllbnRvcyUyMHBsYXlhfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1495822892661-2ead864e1c7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ1fHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D']
    },
    {
      nombre: 'Casa en la Playa',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 100000,
      region: 'Valparaiso',
      imagenes: ['https://plus.unsplash.com/premium_photo-1678286771082-4de8d1e4b649?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWxvamFtaWVudG9zJTIwcGxheWF8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1680287296835-0424869199ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFsb2phbWllbnRvcyUyMHBsYXlhfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1495822892661-2ead864e1c7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ1fHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D']
    },
    {
      nombre: 'Casa en la Playa',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 100000,
      region: 'Valparaiso',
      imagenes: ['https://plus.unsplash.com/premium_photo-1678286771082-4de8d1e4b649?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWxvamFtaWVudG9zJTIwcGxheWF8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1680287296835-0424869199ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFsb2phbWllbnRvcyUyMHBsYXlhfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1495822892661-2ead864e1c7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ1fHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D']
    },
    {
      nombre: 'Casa en la Playa',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 100000,
      region: 'Valparaiso',
      imagenes: ['https://plus.unsplash.com/premium_photo-1678286771082-4de8d1e4b649?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWxvamFtaWVudG9zJTIwcGxheWF8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1680287296835-0424869199ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFsb2phbWllbnRvcyUyMHBsYXlhfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1495822892661-2ead864e1c7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ1fHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D']
    },
    {
      nombre: 'Casa en la Playa',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 100000,
      region: 'Valparaiso',
      imagenes: ['https://plus.unsplash.com/premium_photo-1678286771082-4de8d1e4b649?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWxvamFtaWVudG9zJTIwcGxheWF8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1680287296835-0424869199ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFsb2phbWllbnRvcyUyMHBsYXlhfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1495822892661-2ead864e1c7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ1fHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D']
    },
    {
      nombre: 'Casa en la Playa',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 100000,
      region: 'Valparaiso',
      imagenes: ['https://plus.unsplash.com/premium_photo-1678286771082-4de8d1e4b649?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWxvamFtaWVudG9zJTIwcGxheWF8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1680287296835-0424869199ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFsb2phbWllbnRvcyUyMHBsYXlhfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1495822892661-2ead864e1c7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ1fHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D']
    },
    {
      nombre: 'Casa en la Playa',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 100000,
      region: 'Valparaiso',
      imagenes: ['https://plus.unsplash.com/premium_photo-1678286771082-4de8d1e4b649?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWxvamFtaWVudG9zJTIwcGxheWF8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1680287296835-0424869199ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFsb2phbWllbnRvcyUyMHBsYXlhfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1495822892661-2ead864e1c7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ1fHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D']
    },
    {
      nombre: 'Casa en la Playa',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 100000,
      region: 'Valparaiso',
      imagenes: ['https://plus.unsplash.com/premium_photo-1678286771082-4de8d1e4b649?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWxvamFtaWVudG9zJTIwcGxheWF8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1680287296835-0424869199ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFsb2phbWllbnRvcyUyMHBsYXlhfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1495822892661-2ead864e1c7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ1fHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D']
    },
    {
      nombre: 'Casa en la Playa',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 100000,
      region: 'Valparaiso',
      imagenes: ['https://plus.unsplash.com/premium_photo-1678286771082-4de8d1e4b649?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWxvamFtaWVudG9zJTIwcGxheWF8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1680287296835-0424869199ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFsb2phbWllbnRvcyUyMHBsYXlhfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1495822892661-2ead864e1c7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ1fHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D']
    },
    {
      nombre: 'Casa en la Playa',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 100000,
      region: 'Valparaiso',
      imagenes: ['https://plus.unsplash.com/premium_photo-1678286771082-4de8d1e4b649?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWxvamFtaWVudG9zJTIwcGxheWF8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1680287296835-0424869199ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFsb2phbWllbnRvcyUyMHBsYXlhfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1495822892661-2ead864e1c7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ1fHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D']
    },
    {
      nombre: 'Casa en la Playa',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 100000,
      region: 'Valparaiso',
      imagenes: ['https://plus.unsplash.com/premium_photo-1678286771082-4de8d1e4b649?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWxvamFtaWVudG9zJTIwcGxheWF8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1680287296835-0424869199ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFsb2phbWllbnRvcyUyMHBsYXlhfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1495822892661-2ead864e1c7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ1fHxhbG9qYW1pZW50b3MlMjBwbGF5YXxlbnwwfHwwfHx8MA%3D%3D']
    },

  ]
}
