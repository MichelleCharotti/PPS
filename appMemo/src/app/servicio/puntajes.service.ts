import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Firestore ,collection,addDoc} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PuntajesService {

   itemsCollection !: AngularFirestoreCollection<any>;
  puntajes !: Observable<any[]>;
  firestore : AngularFirestore=inject(AngularFirestore);

  fire: Firestore = inject(Firestore);

  constructor(){}

  async guardarDatos(data : any){
    console.log(data);
    // this.firestore.collection('puntajes').add(data);
    
    
     const photosCollection = collection(this.fire, 'puntajes');
     await addDoc(photosCollection, data);

    // this.firestore.collection<any>('puntajes').add({ ...data});
    console.log(data);

  //   let logs = this.firestore.collection('puntajes');
  //   console.log(logs);
  //   logs.doc().set({fecha: data.fecha , tiempo: data.tiempo, jugador: data.jugador, segundos: data.segundos, nivel: data.nivel});
  //   console.log(logs);
   }

  traerPuntajes(){
    this.itemsCollection = this.firestore.collection<any>('puntajes');
    return this.puntajes = this.itemsCollection.valueChanges();
  }


}
