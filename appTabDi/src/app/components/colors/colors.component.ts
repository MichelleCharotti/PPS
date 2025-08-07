import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
})
export class ColorsComponent  implements OnInit {

  @Output() enviarDato = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {}

  playSound(animal : string)
  {
    this.enviarDato.emit(animal);
  }
}
