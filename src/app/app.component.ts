import { Component } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Guesgame';
  afteller: { min: number, sec: number };
  afwijking: number;
  aantalGokken: number;
  teGokkenGetal: number;
  gok: number;
  spelGewonnen:boolean;
  spelVerloren:boolean;
  
  constructor() {
    this.restartSpel();
  }
  restartSpel() {
    this.aantalGokken = 0;
    this.teGokkenGetal = Math.floor(Math.random() * 100 + 1);
    this.gok = null;
    this.afwijking = null;
    this.spelGewonnen = false;
    this.spelVerloren = false;
    this.afteller;
    this.startTimer();
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
  startTimer() {
    this.afteller = { min: 5, sec: 0 }
    let intervalId = setInterval(() => {
      if (this.afteller.sec - 1 == -1) {
        this.afteller.min -= 1;
        this.afteller.sec = 59
      } 
      else this.afteller.sec -= 1
      if (this.afteller.min === 0 && this.afteller.sec == 0) 
      {clearInterval(intervalId)
      this.spelVerloren=true;
      }
    }, 1000)
  }
  
}
