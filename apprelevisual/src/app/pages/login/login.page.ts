import { Component, inject } from '@angular/core';
import {  FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../servicio/auth.service';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {

  protected mail: string = "";
  protected pass: string ="";
  protected alert: string = "";
  fb: FormBuilder = inject(FormBuilder);
  loginForm: FormGroup;
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  navCtrl: NavController = inject(NavController);

  constructor() {
    const minLength = Validators.minLength(6);
    const required = Validators.required;
    const correo = Validators.email;

    this.loginForm = this.fb.group({
      mail: [this.mail, [required, correo]],
      pass: [this.pass, [required, minLength]],
    });
  }

  async login()
  {
    if (this.loginForm.valid) {
      const usuario: Usuario = this.loginForm.value;
      this.authService.login(usuario.mail, usuario.pass)
    .then(alert => {
      
      this.loginForm.reset();
      this.alert = alert;
      this.mail = "";
      this.pass = "";
      if (alert === '') {
        this.navCtrl.navigateRoot('/home');
      }
    }).catch(error => {
      console.error('login.component - login()', error);
    });
    }
    else {
      this.loginForm.markAllAsTouched();
    }
  }

  buttonDemoUno()
  {
    this.mail="Admin@admin.com";
    this.pass="111111";
    this.loginForm.setValue({mail: this.mail, pass: this.pass});
  }

  buttonDemoDos()
  {
    this.mail="invitado@invitado.com";
    this.pass="222222";
    this.loginForm.setValue({mail: this.mail, pass: this.pass});
  }

  buttonDemoTres()
  {
    this.mail="usuario@usuario.com";
    this.pass="333333";
    this.loginForm.setValue({mail: this.mail, pass: this.pass});
  }

}
