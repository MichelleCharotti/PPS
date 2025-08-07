import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { FirebaseService } from 'src/app/servicio/firebase.service';
import { UtilsService } from 'src/app/servicio/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  form = new FormGroup({
    email: new FormControl<any>('', [Validators.required, Validators.email]),
    password: new FormControl<any>('',[Validators.required]),
  })

  constructor(private firebaseSvc: FirebaseService,private utilsSvc: UtilsService,private route: Router) 
  { }


  ngOnInit() {
  }


  submit() {
    if (this.form.valid) {
      //console.log(this.form.value);
      this.utilsSvc.presentLoading({message: 'Autenticando...',spinner: 'bubbles',cssClass: 'custom-loading'})
      this.firebaseSvc.login(this.form.value as User).then(async res =>{
        let user: User={
          uid: res.user?.uid,
          // name: res.user?.displayName,
          email: this.form.value.email,
          password: this.form.value.password
        }
        this.utilsSvc.setElementInLocalstorage('user',user)
        this.utilsSvc.routerLink('/home')
        this.route.navigate(['/home'], { queryParams: user });
        
        
        this.utilsSvc.dismissLoading();
        this.utilsSvc.presentToast({
          message: `Te damos la bienvenida ${user.email}`,
          duration: 1500,
          cssClass: 'toast-bg',
          icon: 'person-outline'
        })

        this.form.reset();
      }, error =>{
        this.utilsSvc.presentToast({
          message: 'Usuario y/o contraseña inválida',
          duration: 1500,
          cssClass: 'toast-bg',
          icon: 'alert-circle-outline'
        })
        this.utilsSvc.dismissLoading();
      })
    }
  }
  signup(){
    this.utilsSvc.routerLink('/signup')
  }
  logueoRapido(email:string, pass:string){
    this.form.controls['email'].setValue(email);
    this.form.controls['password'].setValue(pass);
  }

}
