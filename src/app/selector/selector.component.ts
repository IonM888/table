import { Component } from '@angular/core';
import {dateService} from "../shared/date-service";

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})

export class SelectorComponent  {

  constructor( private dateService: dateService) { }

  // ngOnInit(): void {
  // }

}
