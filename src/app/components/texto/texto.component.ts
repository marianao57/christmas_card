import { Component, Input } from '@angular/core';
import { CardTitle } from 'src/app/models/cardTitle.model';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css'],
})
export class TextoComponent {
  @Input() cardTitle: CardTitle = {
    title: ''
  };
}
