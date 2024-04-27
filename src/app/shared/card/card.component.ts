import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() references!: string;
  @Input() date!: string;
  @Input() price!: string;
}
