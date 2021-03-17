import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
import { StudentService } from './ student.service';
import { MessageService } from './ message-service.service';


export interface Post {
  title:string,
  text:string
  id?:number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  posts: Post[]=[
    {title:'my first Title',text:'Example text component first',id:1},
    {title:'my second Title',text:'Example text component second',id:2},
    {title:'my third Title',text:'Example text component third',id:3}
  ]

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
