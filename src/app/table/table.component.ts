import { Component, OnInit } from '@angular/core';
import { Subject, from, interval } from 'rxjs';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // const observable1 = interval(400);
    // const observable2 = interval(300);
    //
    // const subscription = observable1.subscribe(x => console.log('first: ' + x));
    // const childSubscription = observable2.subscribe(x => console.log('second: ' + x));
    //
    // subscription.add(childSubscription);
    //
    // setTimeout(() => {
    //   // Unsubscribes BOTH subscription and childSubscription
    //   subscription.unsubscribe();
    // }, 1000);
    // const values = new Observable((observer) => {
    //   observer.next(8)
    //   observer.next(9)
    //   observer.next('d')
    //
    //   observer.complete()
    //
    //   return {
    //     unsubscribe() {
    //       console.log('Unsubscribed')
    //
    //     },
    //   }
    // })
    // const subscription = values.subscribe(
    //   (v) => {
    //     console.log(v)
    //   },
    //   (error) => {
    //     console.log(error)
    //   },
    //   () => {
    //     console.log('Completed')
    //   }
    // )
    //
    // subscription.unsubscribe()

    let subject = new Subject();

    subject.subscribe(value => console.log(`Received new subject value:${value} `))
    subject.next(55);












  };
  runObserver(){

    const subject = new Subject <number>();

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });

    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`)
    });

    subject.next(1);
    subject.next(4);
  };
//
//   runObserverTwo(){
//     const subject = new Subject<number>();
//
//     subject.subscribe({
//       next: (v) => console.log(`observerA: ${v}`)
//     });
//     subject.subscribe({
//       next: (v) => console.log(`observerB: ${v}`)
//     });
//
//     const observable = from([1, 2, 3]);
//
//     observable.subscribe(subject); // You can subscribe providing a Subject
//   };
//
//   runObserverThree(){
//     const source = from([1, 2, 3]);

//     const subject = new Subject();
//     const multiCasted = source.pipe(multicast(subject));
//
// // These are, under the hood, `subject.subscribe({...})`:
//     multiCasted.subscribe({
//       next: (v) => console.log(`observerA: ${v}`)
//     });
//     multiCasted.subscribe({
//       next: (v) => console.log(`observerB: ${v}`)
//     });
//
// // This is, under the hood, `source.subscribe(subject)`:
//    // source.subscribe(subject)
//     //multiCasted.connect();
//   };
//
//   runObserverFour(){
//     const source = interval(500);
//     const subject = new Subject();
//     const multicasted = source.pipe(multicast(subject));
//     let subscription1, subscription2, subscriptionConnect;
//
//     subscription1 = multicasted.subscribe({
//       next: (v) => console.log(`observerA: ${v}`)
//     });
// // We should call `connect()` here, because the first
// // subscriber to `multicasted` is interested in consuming values
//    // subscriptionConnect = multicasted.connect();
//     subscriptionConnect = multicasted.subscribe();
//
//     setTimeout(() => {
//
//       subscription2 = multicasted.subscribe({
//         next: (v) => console.log(`observerB: ${v}`)
//       });
//     }, 3000);
//
//     setTimeout(() => {
//       subscription1.unsubscribe();
//
//     }, 3000);
//
// // We should unsubscribe the shared Observable execution here,
// // because `multicasted` would have no more subscribers after this
//     setTimeout(() => {
//       subscription2.unsubscribe();
//
//       subscriptionConnect.unsubscribe(); // for the shared Observable execution
//
//     }, 3000);
//   }






}
