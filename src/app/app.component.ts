import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
import { StudentService } from './ student.service';
import { MessageService } from './ message-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  students: Student[] = [];

  constructor(  private messageService: MessageService) {}

  ngOnInit() {

    this.getUpdatedMessage();

  }
  getUpdatedMessage() {
    this.messageService.message.subscribe(
      res => {
        console.log('message', res);
      }
    )
  }

  setMessage() {
    let message = (<HTMLInputElement>document.getElementById("message")).value;
    this.messageService.setMessage(message);
  }


}
