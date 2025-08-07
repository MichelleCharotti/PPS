import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/servicio/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  idiomaActual : string = "es";
  portugues : boolean = false;
  ingles : boolean = false;
  espaniol : boolean = true;

  colors : boolean = false;
  numbers : boolean = false;
  animals : boolean = true;

  constructor(private auth : FirebaseService, private router: Router) {}

  ngOnInit() {
  }

  cerrarSesion(){    
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

  cambiarIdioma(seleccion : string)
  {
    switch(seleccion)
    {
        case "es":
          this.espaniol = true;
          this.ingles = false;
          this.portugues = false; 
          this.idiomaActual = "es";        
          break;
        case "en":
          this.ingles = true;
          this.espaniol = false;
          this.portugues = false;
          this.idiomaActual = "en";
          break;
        case "po":
          this.portugues = true;
          this.espaniol = false;
          this.ingles = false;
          this.idiomaActual = "por";
          break;
    }
  }

  cambiarTema(opcion : string)
  {
    switch(opcion)
    {
        case 'a':
          this.animals = true;
          this.colors = false;
          this.numbers = false;
          break;
        case 'n':
          this.numbers = true;
          this.animals = false;
          this.colors = false;
          break;
        case 'c':
          this.colors = true;
          this.numbers = false;
          this.animals = false;
          break;
    }
  }

  playSonido(dato : string)
  {
    let ruta : string = '../../../assets/audios/';
    let nombreArchivo : string = "";
    let audioNombre : string = "";

    audioNombre = dato + "-" + this.idiomaActual + ".mp3"; 
    nombreArchivo = ruta + audioNombre;

    this.play(nombreArchivo);
           
  }

  play(ruta : string)
  {
    let audio = new Audio(ruta);
    audio.play();   
  }

}
