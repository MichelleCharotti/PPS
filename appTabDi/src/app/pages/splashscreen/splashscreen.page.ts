import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
  standalone: false,
})
export class SplashscreenPage implements OnInit {

  constructor(private route: Router) { 
    setTimeout(() => {
      this.route.navigateByUrl('/login');
    },5000);

  }

  ngOnInit() {
  }

}
