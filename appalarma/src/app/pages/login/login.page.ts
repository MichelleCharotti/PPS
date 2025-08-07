import { Component, OnInit, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonList, IonItem, IonSegmentButton, IonSegment, IonCol, IonRow, IonIcon, IonText, IonGrid } from '@ionic/angular/standalone';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../servicio/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../models/usuario';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonGrid, IonText, IonIcon, IonRow, IonCol, IonSegment, IonSegmentButton, IonContent, CommonModule, FormsModule,
     ReactiveFormsModule,IonButton,IonHeader,IonIcon,IonToolbar,IonItem,IonTitle,IonInput ]
})


export class LoginPage implements OnInit {

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

  ngOnInit(): void {}

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
        this.navCtrl.navigateRoot('/tabs');
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
    this.mail="usuario@usuario.com";
    this.pass="333333";
    this.loginForm.setValue({mail: this.mail, pass: this.pass});
  }

  buttonDemoTres()
  {
    this.mail="anonimo@anonimo.com";
    this.pass="444444";
    this.loginForm.setValue({mail: this.mail, pass: this.pass});
  }

    buttonDemoCuatro()
  {
    this.mail="invitado@invitado.com";
    this.pass="222222";
    this.loginForm.setValue({mail: this.mail, pass: this.pass});
  }


}
