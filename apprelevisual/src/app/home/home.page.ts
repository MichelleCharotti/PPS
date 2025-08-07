import { Component, OnInit, inject } from '@angular/core';
import { IonContent, IonCard, IonCardContent, IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/angular/standalone';
import { AuthService } from '../servicio/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CamaraService } from 'src/app/servicio/camara.service';
import { ImagenUploadService } from 'src/app/servicio/imagen-upload.service';
import Swal from 'sweetalert2';
import { ItemService } from 'src/app/servicio/item.service';
import { GraficosPage } from '../pages/graficos/graficos.page';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

 
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  usuario: string = '';
  public subscription: Subscription = new Subscription();
  selectedCosas: string = '';
  private cameraService: CamaraService = new CamaraService();
  private imagenUploadService: ImagenUploadService = new ImagenUploadService();
  private itemService: ItemService = inject(ItemService);
  

  ngOnInit(): void {
    this.subscription = this.authService.user$.subscribe((user) => {
      if (user) {
        this.authService.currentUserSig.set({
          mail: user.email!,
          pass: "",
          nombre: "", 
          apellido: "",
        });
        this.usuario = user.email!;        
      } else {
        this.usuario="";
        this.authService.currentUserSig.set(null);    
      }
    });
  }

  goToCosas(cosas: string)
  {
    this.selectedCosas = cosas;
  }

  goHome() {
    this.selectedCosas = '';
  }



  logout() {
    this.authService.logout();
  }

  async takePhoto() {
    try {
      const imageBase64 = await this.cameraService.takePhoto();
      if (imageBase64) {
        const url = await this.imagenUploadService.uploadPhoto(imageBase64);
        this.itemService.savePhotoData(url, this.selectedCosas);

        Swal.fire({
          title: 'Imagen subida exitosamente',
          icon: 'success',
          heightAuto: false,
          allowEscapeKey: false,
          allowOutsideClick: false,
        });
        
    this.selectedCosas = '';
      }
    } catch (error) {
      Swal.fire({
        title: 'Error al subir la foto',
        icon: 'error',
        heightAuto: false,
        allowEscapeKey: false,
        allowOutsideClick: false,
      });
      
    this.selectedCosas = '';

    }
  }

  async selectFromGallery() {
    try {
      const imageBase64 = await this.cameraService.selectFromGallery();
      if (imageBase64) {
        const url = await this.imagenUploadService.uploadPhoto(imageBase64);        
        this.itemService.savePhotoData(url, this.selectedCosas);

        Swal.fire({
          title: 'Imagen subida exitosamente',
          icon: 'success',
          heightAuto: false,
          allowEscapeKey: false,
          allowOutsideClick: false,
         
        });
        this.selectedCosas = '';
      }
    } catch (error) {
      Swal.fire({
        title: 'Error al subir la foto',
        icon: 'error',
        heightAuto: false,
        allowEscapeKey: false,
        allowOutsideClick: false,
      });
      
    this.selectedCosas = '';
    }
  }

     grafico(selectedCosas:string) {

      if(selectedCosas=='lindas'){
this.router.navigate(['/graficosbar']);
      }
      if(selectedCosas=='feas'){
        console.log('grafico barra');
this.router.navigate(['/graficostor']);
      }
    
  }


  

}
