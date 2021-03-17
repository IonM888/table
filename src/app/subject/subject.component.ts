import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

  displayError = false;
  displayTrue = true;


  counterValue = 0
  // counterPow = 0;
  // counterSqrt = 0;
  // counterEuro = 0;
  // counterKm = 0

  numberSquare$: BehaviorSubject<number> = new BehaviorSubject<number>(this.counterValue)


  toMath(value) {
    if (value >= 0) {
      this.displayError = false
      this.displayTrue = true

      this.counterValue = value
      this.numberSquare$.next(this.counterValue)
    } else {
      this.displayError = true
      this.displayTrue = false

    }

  }

  counterEur$ = this.numberSquare$.pipe(map(value =>
    value * 21
  ))
  counterPow$= this.numberSquare$.pipe(map(value => Math.pow(value,2)))
  counterSqrt$=this.numberSquare$.pipe(map(value => Math.sqrt(value)))
  counterKm$=this.numberSquare$.pipe(map(value => value*1000))


  // subPow = this.numberSquare$.subscribe(value => {
  //   this.counterPow = Math.pow(value, 2)
  // })
  // subSqrt = this.numberSquare$.subscribe(value => {
  //   this.counterSqrt = Math.sqrt(value)
  // })
  // subEuro = this.numberSquare$.subscribe(value => {
  //   this.counterEuro = value * 21.15
  // })
  // subKm = this.numberSquare$.subscribe(value => {
  //   this.counterKm = value * 1000
  // })


}


//counter = 0;

// counter$: BehaviorSubject<number> = new BehaviorSubject<number>(this.counter)
// increment() {
//   this.counter$.next(++this.counter)
// }
// decrement() {
//   this.counter$.next(--this.counter)
// }
// sub = this.counter$.subscribe(value => {
//   this.counter = value
// })
// }
