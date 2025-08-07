import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-splashscreem',
  templateUrl: './splashscreem.page.html',
  styleUrls: ['./splashscreem.page.scss'],
  standalone: true,
  imports: [IonContent, IonTitle, CommonModule, FormsModule]
})
export class SplashscreemPage implements OnInit {

  // navCtrl: NavController = inject(NavController);
isSplashVisible = true;

  constructor(private router: Router) { }

  ngOnInit() {
     setTimeout(()=>{
       this.router.navigateByUrl('/login');
       this.isSplashVisible = false;
      // this.navCtrl.navigateRoot('/login');
    },5000)
  }
  
  }


