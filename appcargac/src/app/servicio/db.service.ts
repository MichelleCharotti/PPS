import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  itemsCollection !: AngularFirestoreCollection<any>;
  todosLosUsuarios !: Observable<any[]>;

  constructor(private firestore:AngularFirestore) { }

  traerUsuarios(){
    this.itemsCollection = this.firestore.collection<any>('user');
    return this.todosLosUsuarios = this.itemsCollection.valueChanges();
  }
  actualizarUsuario(atributo: any, uid: any){
    console.log(atributo);
    this.firestore.collection('user').doc(uid).set(atributo,{merge:true});
  }
}
