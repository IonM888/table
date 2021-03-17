import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sass',
  templateUrl: './sass.component.html',
  styleUrls: ['./sass.component.scss']
})
export class SassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title=''
  text=''
  inputHandler(event){
    this.title=event
  }

}
