import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss'],
})
export class AnimalsComponent  implements OnInit {
  
  @Output() enviarDato = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {}
  playSound(animal : string)
  {
    this.enviarDato.emit(animal);
  }

}
