import { Component, OnInit,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss'],
})
export class NumbersComponent  implements OnInit {

  @Output() enviarDato = new EventEmitter<string>()
  constructor() { }

  ngOnInit() {}
  playSound(animal : string)
  {
    this.enviarDato.emit(animal);
  }

}
