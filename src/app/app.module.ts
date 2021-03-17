import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableNewComponent } from './table-new/table-new.component';
import { TimeSComponent } from './time-s/time-s.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SelectorComponent } from './selector/selector.component';
import { OrganizerComponent } from './organizer/organizer.component';
import {MomentPipe} from "./shared/moment.pipe";
import { CounterComponent } from './counter/counter.component';
import { SubjectComponent } from './subject/subject.component';
import { TaskComponent } from './task/task.component';
import { SassComponent } from './sass/sass.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableNewComponent,
    TimeSComponent,
    CalendarComponent,
    SelectorComponent,
    OrganizerComponent,
    MomentPipe,
    CounterComponent,
    SubjectComponent,
    TaskComponent,
    SassComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
