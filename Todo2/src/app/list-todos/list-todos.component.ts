import {Component, OnInit} from '@angular/core';
import {DatePipe, NgForOf, UpperCasePipe} from "@angular/common";
import {TodoDataService} from "../service/data/todo-data.service";

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
export class ListTodosComponent implements OnInit{
  todos? : Todo[
    // new Todo(1, 'Learn to Dance', false, new Date()),
    // new Todo(2, 'Become an Expert at Angular', false, new Date()),
    // new Todo(3, 'Visit India', false, new Date())
  ];
  constructor(private todoService:TodoDataService) {
  }

  ngOnInit(): void {
    this.todoService.rechieveAllTodo('mai').subscribe(
      response =>{
        this.todos = response;
      }
    );
  }

}
