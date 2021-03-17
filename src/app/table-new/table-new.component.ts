import {Component, OnInit} from '@angular/core';
import {log} from "util";
import { Subject } from 'rxjs';
@Component({
  selector: 'app-table-new',
  templateUrl: './table-new.component.html',
  styleUrls: ['./table-new.component.css']
})
export class TableNewComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

    //  const initTable = (table,key) => {
    //    for (let i = 0; i < table.length; i++) {
    //      this.entriesToShow[table[i].id] = true;
    //      const keys = Object.keys(table[i])
    //      keys.forEach(key => this.columnsToShow[key] = true);
    //    }
    //    this.dynamicallyArray=table
    //    this.tableKey=key;
    //  }
    //
    // //initTable(this.oldClients)
    // //initTable(this.newClients)
    // initTable(this.arrayTable,"firstName")
  this.selectArray('arrayTable','firstName')

  }


  columnsToShow = {}
  entriesToShow = {}
  objectKeys = Object.keys;

  dynamicallyArray = []

  tableKey = "";

  arrayTable = [
    {id: 1, firstName: 'John', lastName: 'Doe', age: '35'},
    {id: 2, firstName: 'Michael', lastName: 'Smith', age: '39'},
    {id: 3, firstName: 'Michael', lastName: 'Jordan', age: '45'},
    {id: 4, firstName: 'Tanya', lastName: 'Blake', age: '47'},
    {id: 5, firstName: 'Michael', lastName: 'Smith', age: '39'},
    {id: 6, firstName: 'Michael', lastName: 'Jordan', age: '45'},
    {id: 7, firstName: 'Tanya', lastName: 'Blake', age: '47'}
  ];

  oldClients = [
    {id: 1, Name: 'Abraham Lincoln', email: 'ab.lincoln@gov.usa.com', country: 'USA', YearOfBirth: 1809},
    {id: 2, Name: 'Margaret Teacher', email: 'margaret.teacher@tec.uk', country: 'UK', YearOfBirth: 1925},
    {id: 3, Name: 'Alexander John Cuza', email: 'johny.cuza@alex.gov.ro', country: 'RO', YearOfBirth: 1820},
    {id: 4, Name: 'Alexandr Macedon', email: 'Alexandr.big@greec.state.com', country: 'GRE', YearOfBirth: 356},
    {id: 5, Name: 'Alexandr Lapusneanu', email: 'alex.lapus@gov.mai.md', country: 'MD', YearOfBirth: 1499},
    {id: 6, Name: 'Stefan cel Mare', email: 'stefanOfBig@gov.mae.md', country: 'MD', YearOfBirth: 1433},
    {id: 7, Name: 'Michael Viteazul', email: 'mishaV56@mail.ru', country: 'RO', YearOfBirth: 1558},

  ];
  newClients = [
    {id: 1, fName: 'Abraham Lincoln', lName: 'Doe'},
    {id: 2, fName: 'Margaret Teacher', lName: 'Smith'},
    {id: 3, fName: 'Alexander John Cuza', lName: 'Jordan'},
    {id: 4, fName: 'Alexandr Macedon', lName: 'Blake'},
    {id: 5, fName: 'Alexandr Lapusneanu', lName: 'Smith'},
    {id: 6, fName: 'Stefan cel Mare', lName: 'Jordan'},
    {id: 7, fName: 'Michael Viteazul', lName: 'Blake'},
    {id: 8, fName: 'Michael Viteazul', lName: 'Blake'},
    {id: 9, fName: 'Michael Viteazul', lName: 'Blake'}
  ];


  hideRow(id) {

    this.entriesToShow[id] = !this.entriesToShow[id]
    console.log(this.entriesToShow)
  }

  hideColumns(id) {

    this.columnsToShow[id] = !this.columnsToShow[id]
    console.log(this.columnsToShow)

  };

  initTable(table, key) {
    this.columnsToShow = [];
    for (let i = 0; i < table.length; i++) {
      this.entriesToShow[table[i].id] = true;
      const keys = Object.keys(table[i])
      keys.forEach(key => this.columnsToShow[key] = true);
    }
    this.dynamicallyArray = table
    this.tableKey = key;
  }

  //initTable(this.oldClients)
  //initTable(this.newClients)
  // initTable(this.arrayTable,"firstName")

  selectArray(event, key) {

    console.log(this.dynamicallyArray)
   // console.log(event)
//console.log(event.target.value)
    // console.log(event.target.value)
    // console.log(event.target.id)

  //this.initTable(this[event.target.value],key)
    this.initTable(this[event] ,key)







  };


}
