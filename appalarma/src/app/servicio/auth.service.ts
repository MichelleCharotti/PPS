import { Injectable, inject, signal } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, user } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Usuario } from '../interfaces/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private firebaseAuth: Auth = inject(Auth);
  private router: Router = inject(Router);

  public user$ = user(this.firebaseAuth);
  public currentUserSig = signal<Usuario | null | undefined>(undefined);
  public currentUser: string = '';
  public currentPass: string = '';

  // public http: HttpClient = inject(HttpClient);

  constructor() {}
  
  login(mail: string, password: string): Promise<string> {
    return new Promise<string>((resolve) => {
      signInWithEmailAndPassword(this.firebaseAuth, mail, password)
        .then(async (userCredential) => {

          const user = userCredential.user;
          const pass = password;
          this.router.navigate(['/home']);
          resolve('');
          if (user.email) {
            this.currentUser = user.email;
            this.currentPass = pass;
          }

        })
        .catch(err => {
          let mensajeError = '';
          switch (err.message) {
            case 'Firebase: Error (auth/invalid-credential).':
              mensajeError = 'Credenciales inválidas.';
              break;
            case 'Firebase: Error (auth/invalid-email).':
              mensajeError = 'Ingrese un correo válido.';
              break;
            case 'Firebase: Error (auth/missing-password).':
              mensajeError = 'Ingrese una contraseña.';
              break;
            default:
              mensajeError = 'Error al iniciar sesión. '+ err.message;
              break;
          }
          resolve(mensajeError);
        });
    });
  }  

  logout() {
    signOut(this.firebaseAuth).then(() => {
      this.currentUserSig.set(null);
      this.router.navigate(['/login']);
    });
  }
}