import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, LoadingOptions, ToastController, ToastOptions } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  itemsCollection !: AngularFirestoreCollection<any>;
  dataImg !: Observable<any[]>;

    constructor(
    private firestore : AngularFirestore,
    private router: Router,
    private toastController: ToastController
  ) {}

traerCosas(tipo : string){
    this.itemsCollection = this.firestore.collection<any>('photos',ref => ref.where('category','==',tipo));
    return this.dataImg = this.itemsCollection.valueChanges();
  }

  async presentToast(opts: ToastOptions){
    const toast = await this.toastController.create(opts);
    toast.present();
  }

  //================ Router ================
  routerLink(url: string) {
    return this.router.navigateByUrl(url);
  }
 

}