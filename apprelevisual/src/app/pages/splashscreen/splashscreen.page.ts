import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
  standalone: false,
})
export class SplashscreenPage implements OnInit {

  isSplashVisible = true;

   constructor(private route: Router) { }

  ngOnInit() {
    setTimeout(()=>{
       this.isSplashVisible = false;
      this.route.navigate(['/login']);
    },5000);
  }

}
