import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {getAuth, updateProfile} from "firebase/auth";
import { Router } from '@angular/router';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private auth: AngularFireAuth,private router: Router) 
  { }

  //======= Autenticacion ========
  login(email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email,password)
  }

  // async signinUp(email: string, password: string){
   async signinUp(user:User){
    return this.auth.createUserWithEmailAndPassword(user.email,user.password)
    .then(() => {
      this.router.navigate(['/home']);
    })
    .catch(
      // e => this.thrownErrorsRegister(e.code)
    )
  }

  // updateUser(user: any){
  //   const auth = getAuth();
  //   return updateProfile(auth.currentUser, user)
  // }
  mailLogueado(){
    return this.auth.authState;
  }
  logout(){
    return this.auth.signOut();
  }
}
