import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { AuthService } from 'src/app/servicio/auth.service';
import { UtilsService } from 'src/app/servicio/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  formRegistro:FormGroup;
  
  constructor(private auth : AuthService,private fb : FormBuilder, private router: Router, private utilservice: UtilsService) { 
    this.formRegistro = this.fb.group(
      {
        'email':<any>['',[Validators.required,Validators.email]],
        'pass':<any>['',[Validators.required,Validators.minLength(6)]]
      }
    );
  }

  ngOnInit() {
  }

  login(){
    if (this.formRegistro.valid) {
      //console.log(this.form.value);
      this.utilservice.presentLoading({message: 'Validando...',spinner: 'crescent',cssClass: 'custom-loading'})
      this.auth.login(this.formRegistro.value.email, this.formRegistro.value.pass).then(async res =>{
        let user: User={
          uid: res.user?.uid,
          // name: res.user?.displayName,
          name: this.formRegistro.value.name,
          email: this.formRegistro.value.email,
          password:this.formRegistro.value.pass
        }
        this.utilservice.dismissLoading();
        this.utilservice.setElementInLocalstorage('user',user)
        this.utilservice.routerLink('/home')
        this.router.navigate(['/home'], { queryParams: user });
        
        
        
        this.utilservice.presentToast({
          message: `Te damos la bienvenida ${user.email}`,
          duration: 1500,
          cssClass: 'toast-bg',
          icon: 'person-outline',
          position:'top'
        })

        this.formRegistro.reset();
      }, error =>{
        this.utilservice.dismissLoading();
        this.utilservice.presentToast({
          message: 'Usuario y/o contraseña inválida',
          duration: 1500,
          cssClass: 'toast-bg',
          icon: 'alert-circle-outline',
          position:'top'
        })
      })
  }
}

  logueoRapido(email:string,pass:string){
    this.formRegistro.controls['email'].patchValue(email);
    this.formRegistro.controls['pass'].patchValue(pass);
  }

}
