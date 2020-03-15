import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private min = 5;
  private sec = 0;
  secSubject: Subject<number> = new Subject<number>();
  secS=this.secSubject.asObservable();
  minSubject: Subject<number> = new Subject<number>();
  minS=this.minSubject.asObservable();
  afteller;
  restart(){
    this.min=5;
    this.sec=0;
    }
    
  constructor(){
    this.afteller = setInterval(()=>{
  if (this.sec - 1 == -1) {  
    this.min -= 1;
    this.minSubject.next(this.min);
    this.sec = 59;
    this.secSubject.next(this.sec);
  } 
  else 
  {this.sec -= 1;
    this.secSubject.next(this.sec);
  }
  if(this.min === 0 && this.sec===0) 
  { clearInterval(this.afteller);
    this.secSubject.next(this.sec);
    this.minSubject.next(this.min);
}},1000);
  
}

}
