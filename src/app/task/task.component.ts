import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {map, reduce} from "rxjs/operators";
import {log} from "util";
import {mapEntry} from "@angular/compiler/src/output/map_util";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


  }

 // myListOfTasks=[]
 //  target={}
 //  listTasks$ :BehaviorSubject<any> = new BehaviorSubject<any>(this.myListOfTasks)
 //
 //
 //  toList(value){
 //
 //
 //    this.myListOfTasks.push(value)
 //
 //    //let target={}
 //
 //
 //    //this.myListOfTasks.forEach(key => target[key] = "False");
 //
 //
 //    console.log(this.myListOfTasks)
 //    //console.log(target)
 //
 //    this.listTasks$.next(this.myListOfTasks)
 //
 //  }
 //
 //
 //
 //  myListOfTasks$= this.listTasks$.pipe(map(value => value))












}
