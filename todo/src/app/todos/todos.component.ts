import { Component } from '@angular/core';
import {NgIf, NgFor, UpperCasePipe, DatePipe} from "@angular/common";

export class Todo{
  constructor(
    public id:number,
    public description:String,
    public done:boolean,
    public targetDate: Date
  ) {
  }
}
@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgIf, NgFor, UpperCasePipe, DatePipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos = [
    new Todo(1, 'Learn to dance',false,new Date()),
    new Todo(2, 'Become an Expert at Angular', false, new Date()),
    new Todo(3, 'Visit India', false, new Date())
  ]
}
