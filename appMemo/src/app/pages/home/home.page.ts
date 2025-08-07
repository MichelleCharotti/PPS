import { Component, Inject, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicio/auth.service';
import { PuntajesService } from 'src/app/servicio/puntajes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit{

  cartasArray : any = []
  cartas : any = []
  dificultad : string = '';

  animales = [
    {
      id:1,
      urlImagen:'/assets/images/animals/cow.png'
    },
    {
      id:2,
      urlImagen:'/assets/images/animals/lion.png'
    },
    {
      id:3,
      urlImagen:'/assets/images/animals/monkey.png'
    },
    {
      id: 4,
      urlImagen: '/assets/images/animals/cow.png'
    },
    {
      id: 5,
      urlImagen: '/assets/images/animals/lion.png'
    },
    {
      id: 6,
      urlImagen: '/assets/images/animals/monkey.png'
    }
  ]

  herramientas = [
    {
      id:1,
      urlImagen:'/assets/images/mystic/llave.png'
    },
    {
      id:2,
      urlImagen:'/assets/images/mystic/pala.png'
    },
    {
      id:3,
      urlImagen:'/assets/images/mystic/serrucho.png'
    },
    {
      id:4,
      urlImagen:'/assets/images/mystic/taladro.png'
    },
    {
      id:5,
      urlImagen:'/assets/images/mystic/destornillador.png'
    },
    {
      id: 6,
      urlImagen: '/assets/images/mystic/llave.png'
    },
    {
      id: 7,
      urlImagen: '/assets/images/mystic/pala.png'
    },
    {
      id: 8,
      urlImagen: '/assets/images/mystic/serrucho.png'
    },
    {
      id: 9,
      urlImagen: '/assets/images/mystic/taladro.png'
    },
    {
      id: 10,
      urlImagen: '/assets/images/mystic/destornillador.png'
    }
  ]

  frutas = [
    {
      id: 1,
      urlImagen: '/assets/images/instruments/arandanos.png'
    },
    {
      id: 2,
      urlImagen: '/assets/images/instruments/fresa.png'
    },
    {
      id: 3,
      urlImagen: '/assets/images/instruments/albaricoque.png'
    },
    {
      id: 4,
      urlImagen: '/assets/images/instruments/manzana.png'
    },
    {
      id: 5,
      urlImagen: '/assets/images/instruments/naranja.png'
    },
    {
      id: 6,
      urlImagen: '/assets/images/instruments/palta.png'
    },
    {
      id: 7,
      urlImagen: '/assets/images/instruments/platano.png'
    },
    {
      id: 8,
      urlImagen: '/assets/images/instruments/uva.png'
    },
    {
      id: 9,
      urlImagen: '/assets/images/instruments/arandanos.png'
    },
    {
      id: 10,
      urlImagen: '/assets/images/instruments/fresa.png'
    },
    {
      id: 11,
      urlImagen: '/assets/images/instruments/albaricoque.png'
    },
    {
      id: 12,
      urlImagen: '/assets/images/instruments/manzana.png'
    },
    {
      id: 13,
      urlImagen: '/assets/images/instruments/naranja.png'
    },
    {
      id: 14,
      urlImagen: '/assets/images/instruments/palta.png'
    },
    {
      id: 15,
      urlImagen: '/assets/images/instruments/platano.png'
    },
    {
      id: 16,
      urlImagen: '/assets/images/instruments/uva.png'
    }
  ]

  seconds : number = 0;
  intervalId: any;
  aciertos : number = 0;
  cantidadPares : number = 0;
  tiempoJugador : any;
  email: any;

  public auth : AuthService= inject(AuthService);
private db : PuntajesService=inject(PuntajesService);
private router: Router=inject(Router);

  constructor() {}

  ngOnInit() {
    this.auth.mailLogueado().subscribe(
      user=>{
        this.email = user?.email;
      }
    )
  }


  jugar(id:number){    
    
    const element = document.getElementById(id.toString());

    element!.classList.toggle('flipped');

    let carta1 = this.cartas.find((a: { id: number; })=> a.id == id);

    if(this.cartasArray.length == 0){
      this.cartasArray.push(carta1);

    }else{
      const esta = this.cartasArray.find((a: { urlImagen: string | undefined; }) => a.urlImagen == carta1?.urlImagen);
      const repetida = this.cartasArray.find((a: { id: number; }) => a.id == id);

      if(repetida){
        this.cartasArray = [];
        return
      }

      const idCarta1 = this.cartasArray[0].id;
      const element1 = document.getElementById(idCarta1.toString());

      const element2 = document.getElementById(id.toString());
      if(!esta){ 
        setTimeout(() => {
          element1!.classList.toggle('flipped');
          element2!.classList.toggle('flipped');
        }, 1000);

      }else{        
        
        element1!.parentNode?.removeAllListeners!();
        element2!.parentNode?.removeAllListeners!();
        this.aciertos++;
        if(this.aciertos == this.cantidadPares){
          this.tiempoJugador = this.formatTime();
          clearInterval(this.intervalId);                  
          setTimeout(() => {
            this.win()
          }, 1000);
        }
      }

      this.cartasArray = [];
    }
  }

  elegirNivel(nivel : number){
    switch (nivel) {
      case 0:
        this.aciertos = 0;
        this.cantidadPares = 0;
        this.stopTimer();
        this.dificultad = '';
        this.cartas = [];
        break;

      case 1:        
        this.dificultad = 'Principiante';
        this.cantidadPares = 3;
        this.cartas = this.animales;
        this.cartas.sort(()=> Math.random() - 0.5);
        this.startTimer()
        break;
      
      case 2:
        this.dificultad = 'Avanzado';
        this.cantidadPares = 5;
        this.cartas = this.herramientas;
        this.cartas.sort(()=> Math.random() - 0.5);
        this.startTimer()
        break;
      
      case 3:
        this.dificultad = 'Experto';
        this.cantidadPares = 8;
        this.cartas = this.frutas;
        this.cartas.sort(()=> Math.random() - 0.5);
        this.startTimer()
        break;
    }
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  updateTimer() {
    this.seconds++;
  }

  formatTime() {
    const minutes = Math.floor(this.seconds / 60);
    const remainingSeconds = this.seconds % 60;
    return `${this.padTime(minutes)}:${this.padTime(remainingSeconds)}`;
  }

  padTime(time: number) {
    return time < 10 ? `0${time}` : time;
  }

  stopTimer(){
    this.seconds = 0;
    clearInterval(this.intervalId);
  }

  win(){
    Swal.fire({
      title: '¡¡Ganaste!!',
      text: `Lo hiciste en ${this.tiempoJugador}`,
      confirmButtonText: "Elegir otra dificultad",
      confirmButtonColor: '#7e34bc',
      background: '#80b97d',
      color: '#FFFFFF',
      heightAuto:false,
      // cancelButtonColor: '#ff9400',
      // showCancelButton: true,
      // cancelButtonText: 'Jugar de nuevo'
    }).then((result) => {
      if (result.isConfirmed) {
        this.guardarDatos()
        this.elegirNivel(0);
        this.stopTimer();
      }else{
        //ACA HABRÍA QUE HACER QUE SE DEN VUELTAS TODAS LAS CARTAS PARA VOLVER A EMPEZAR
        this.stopTimer();
        this.elegirNivel(0)
        this.elegirNivel(1);
      }
    });
  }

  guardarDatos(){
    const date = new Date();    
    //para que quede DD/MM/YYYY
    const mes = date.getMonth()+1 < 10 ? `0${date.getMonth()+1}` : date.getMonth()+1;
    const fecha =`${date.getDate()}/${mes}/${date.getFullYear()}`;

    const jugador = this.email;
    //console.log(fecha, this.tiempoJugador,jugador,this.seconds);
    //guardar los datos,guardo segundos porque creo que para ordenar va a ser mas facil con ese dato
    const data = {
        fecha:fecha,
        tiempo:this.tiempoJugador,
        jugador : jugador,
        segundos: this.seconds,
        nivel : this.dificultad
      }
      
    this.db.guardarDatos(data);
    
  }
  public logout(){
    this.auth.logout();
    this.router.navigateByUrl("/login");
  }

}
