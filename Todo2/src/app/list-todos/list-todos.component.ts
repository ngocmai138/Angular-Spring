import { Component } from '@angular/core';
import {DatePipe, NgForOf, UpperCasePipe} from "@angular/common";

export class Todo{
  constructor(
    public id:number,
    public description:String,
    public done:boolean,
    public targetDate:Date
  ){}
}
@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe,
    UpperCasePipe
  ],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent {
  todos = [
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(2, 'Become an Expert at Angular', false, new Date()),
    new Todo(3, 'Visit India', false, new Date())
  ]
}
