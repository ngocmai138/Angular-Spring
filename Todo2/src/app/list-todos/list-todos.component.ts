import {Component, OnInit} from '@angular/core';
import {DatePipe, NgForOf, NgIf, UpperCasePipe} from "@angular/common";
import {TodoDataService} from "../service/data/todo-data.service";
import {Router} from "@angular/router";
import {MatPaginator, PageEvent} from "@angular/material/paginator";

export class Todo{
  constructor(
    public id:number,
    public description:String,
    public done:boolean,
    public targetDate:Date,
    public modifiedDate:Date,
    public user?:User
  ){}
}

export class User{
  constructor(
    public id:number,
    public username:String,
    public password:String,
    public email:String,
    public enable:boolean
  ) {
  }
}

export interface Page<T>{
  content:T[],
  totalElements: number,
  totalPages: number,
  size:number,
  number:number
}
@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe,
    UpperCasePipe,
    NgIf,
    MatPaginator
  ],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit{
  todos? : Todo[]
  message?:String
  pageSize = 3
  pageNumber = 0
  totalElements=0
  constructor(private todoService:TodoDataService,
              private router:Router) {
  }

  ngOnInit(): void {
    this.refreshAllTodo();
  }

  refreshAllTodo(){
    this.todoService.rechieveAllTodo('mai', this.pageNumber,this.pageSize).subscribe(
      {
        next: (response) => {
          this.todos = response.content;
          this.totalElements = response.totalElements;
        },
        error:(err)=>{
          console.log("Error: "+err)
        }
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

  handleEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageNumber = event.pageIndex;
    this.refreshAllTodo();
  }
}
