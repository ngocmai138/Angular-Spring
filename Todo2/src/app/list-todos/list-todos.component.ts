import {Component, OnInit} from '@angular/core';
import {DatePipe, NgForOf, NgIf, UpperCasePipe} from "@angular/common";
import {TodoDataService} from "../service/data/todo-data.service";
import {Router} from "@angular/router";

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
    UpperCasePipe,
    NgIf
  ],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit{
  todos? : Todo[]
  message?:String
  constructor(private todoService:TodoDataService,
              private router:Router) {
  }

  ngOnInit(): void {
    this.refreshAllTodo();
  }

  refreshAllTodo(){
    this.todoService.rechieveAllTodo('mai').subscribe(
      response =>{
        this.todos = response;
      }
    );
  }

  updateTodo(todo:Todo) {
    this.router.navigate(['todo',todo.id])
  }

  addNewTodo() {
    this.router.navigate(['todo',-1])
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo('mai',todo.id).subscribe(
      data => {
        this.message= 'Delete success';
        this.refreshAllTodo();
      }
    );

  }
}
