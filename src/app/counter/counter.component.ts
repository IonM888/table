import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {count} from "rxjs/operators";
import {logger} from "codelyzer/util/logger";
import {log} from "util";


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


  }


  //Variable:

      counter = 0;
  counterPow = 0;
  counterSqrt = 0;

   counter$: BehaviorSubject<number> = new BehaviorSubject<number>(this.counter)

increment() {
     this.counter$.next(++this.counter)
}

  decrement() {
    this.counter$.next(--this.counter)
  }

  subCounter = this.counter$.subscribe(value => {
    this.counter = value
  })

  subPow = this.counter$.subscribe(value => {
    this.counterPow  = value * value
  })

}
