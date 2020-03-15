import { Component } from '@angular/core';
import { CounterService} from './counter.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Guesgame';
  minC: number;
  secC: number ;
  afwijking: number;
  aantalGokken: number;
  teGokkenGetal: number;
  gok: number;
  spelGewonnen:boolean;
  spelVerloren:boolean;

  constructor( CounterService:CounterService) {
    CounterService.secS.subscribe((secS)=>this.secC=secS);
    CounterService.minS.subscribe((minS)=>this.minC=minS);

    this.restartSpel();
  }
  restartSpel() {
    this.aantalGokken = 0;
    this.teGokkenGetal = Math.floor(Math.random() * 100 + 1);
    this.gok = null;
    this.afwijking = null;
    this.spelGewonnen = false;
    this.spelVerloren = false;
  }
  controleGok() {
    this.afwijking = this.teGokkenGetal - this.gok;
    this.aantalGokken = this.aantalGokken + 1;
    if(this.afwijking===0)
    {this.spelGewonnen=true;   
    }
    if (this.aantalGokken==10) {
      this.spelVerloren=true;
    }
  }
    
}
