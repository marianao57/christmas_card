import { Component } from '@angular/core';
import { CardTitle } from './models/cardTitle.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Feliz Navidad!';
  url = '../assets/images/arbol-fondo.jpg';
  message =
    'La Navidad es sinónimo de amor… es un momento en que el amor de Dios y de los seres humanos debe prevalecer sobre el odio y la amargura… un momento en que nuestros pensamientos, acciones y el espíritu de nuestras vidas manifiesten la presencia de Dios.';
  background = '';
  display = 'none';
  
  celebrate() {
    this.background = '../assets/images/fuegos.gif';
    this.display = 'block';
  }

  ngOnInit() {
    // Realiza cualquier inicialización necesaria aquí
  }
}
