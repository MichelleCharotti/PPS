import { Component, ElementRef, inject, Input, OnInit, ViewChild} from '@angular/core';
import { Chart } from 'chart.js/auto';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicio/auth.service';
import { UtilsService } from 'src/app/servicio/utils.service';

@Component({
  selector: 'app-graficostor',
  templateUrl: './graficostor.page.html',
  styleUrls: ['./graficostor.page.scss'],
  standalone: false,
})
export class GraficostorPage implements OnInit {

  
  cosasFeas : any = []

  barChart : any;


  labelsFeos : any = [];


  cantLikesFeos : any = []


  fotosFeas : any = [];


  mostrarImagen = false;
  imagerParaMostrar : string = '';

   selectedCosas: string = '';

   @ViewChild('barCanvas') private barCanvas!: ElementRef;


  constructor(private auth : AuthService,private db : UtilsService, private router: Router) { 
    
    
    this.db.traerCosas('feas').subscribe(data =>{
      this.cosasFeas = data

      console.log(this.cosasFeas)
      this.cargarChartFeos()
    });

  }
 
  ngOnInit() {
  }



  graficoBarras() {

    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.labelsFeos,
        datasets: [{
          label: 'Cantidad de me gusta',
          data: this.cantLikesFeos,
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
          borderWidth: 3,
         
        }]
      },
      options: {
        scales: {
          y: {
              beginAtZero: true,
              ticks:{
                stepSize:0.5
              }
          }
        }
      }
    });

    this.barChart.destroy();
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.labelsFeos,
        datasets: [{
          label: 'Cantidad de me gusta',
          data: this.cantLikesFeos,
          
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
          borderWidth: 3,
          
        }]
      },
      options: {
        scales: {
          y: {
              beginAtZero: true,
              ticks:{
                stepSize:1,
                
              }
          }
        }
      }
    });
  }

  cargarChartFeos() {
    let tempLabels = [];
    
    for (let i = 0; i < this.cosasFeas.length; i++) {
      // tempLabels = this.cosasFeas[i].email.split('@');
       tempLabels = this.cosasFeas[i].author;
      this.labelsFeos.push(tempLabels + ' | ' + this.cosasFeas[i].createdAt );
      this.cantLikesFeos.push(this.cosasFeas[i].voters.length);
       this.fotosFeas.push(this.cosasFeas[i].pathFoto);
      // console.log(this.fotosFeas);
    }
    this.graficoBarras();
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
