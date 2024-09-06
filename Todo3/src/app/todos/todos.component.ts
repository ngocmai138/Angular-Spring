import { Component } from '@angular/core';
import {DatePipe, NgForOf, UpperCasePipe} from "@angular/common";
export class Todo{
  constructor(
    public id : number,
    public description: String,
    public done: boolean,
    public expectDate: Date
  ) {
  }
}
@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe,
    UpperCasePipe
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos = [
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(2, 'Become an Expert to Angular', false, new Date()),
    new Todo(3, 'Visit India', false, new Date())
  ]
  protected readonly Todo = Todo;
}
