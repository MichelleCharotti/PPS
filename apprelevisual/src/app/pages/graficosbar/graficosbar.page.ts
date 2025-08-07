import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Chart } from 'chart.js/auto';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicio/auth.service';
import { UtilsService } from 'src/app/servicio/utils.service';

@Component({
  selector: 'app-graficosbar',
  templateUrl: './graficosbar.page.html',
  styleUrls: ['./graficosbar.page.scss'],
  standalone: false,
})
export class GraficosbarPage implements OnInit {

  cosasLindas : any = []
  cosasFeas : any = []

  barChart : any;
  tortaChart : any;

  labelsFeos : any = [];
  labelsLindos : any = [];

  cantLikesFeos : any = []
  cantLikesLindos : any = []

  fotosFeas : any = [];
  fotosLindas : any = [];

  mostrarImagen = false;
  imagerParaMostrar : string = '';

   selectedCosas: string = '';

  //  @ViewChild('barCanvas') private barCanvas!: ElementRef;
  @ViewChild('torCanvas') private torCanvas!: ElementRef;



  constructor(private auth : AuthService,private db : UtilsService, private router: Router) { 
 this.db.traerCosas('lindas').subscribe(data =>{
      this.cosasLindas = data
      console.log(this.cosasLindas)
      this.cargarChartLindos()
    });

  }
 
  ngOnInit() {
  }

graficoTortas() {
    this.tortaChart = new Chart(this.torCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: this.labelsLindos,
        datasets: [{
          label: 'Cantidad de me gusta',
          data: this.cantLikesLindos,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            
          },
          title: {
            display: true,
            text: 'Cosas Lindas'
          },
          
        }
        
      },
    });

    this.tortaChart.destroy();
    this.tortaChart = new Chart(this.torCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: this.labelsLindos,
        datasets: [{
          label: 'Cantidad de me gusta',
          data: this.cantLikesLindos,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            // text: 'Cosas Lindas'
          }
        }
      },
    });

  }

  cargarChartLindos() {
    let tempLabels = [];
    
    for (let i = 0; i < this.cosasLindas.length; i++) {
      // tempLabels = this.cosasLindas[i].email.split('@'); 
       tempLabels = this.cosasLindas[i].author;
       
       console.log(tempLabels);
      this.labelsLindos.push(tempLabels + ' | ' + this.cosasLindas[i].createdAt);
      this.cantLikesLindos.push(this.cosasLindas[i].voters.length);
       this.fotosLindas.push(this.cosasLindas[i].pathFoto);
      
    }
    this.graficoTortas();
  }

  logout(){
    this.auth.logout();
    
    this.router.navigateByUrl("/login");
  }

  goHome() {
    this.router.navigateByUrl("/home");
    this.selectedCosas = '/home';
  }

}
