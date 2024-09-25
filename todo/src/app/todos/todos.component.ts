import {Component, OnInit} from '@angular/core';
import {NgIf, NgFor, UpperCasePipe, DatePipe} from "@angular/common";
import {TodoDataService} from "../service/data/todo-data.service";
import {response} from "express";
import {ActivatedRoute, Router} from "@angular/router";
import {JwtAuthenticationService} from "../service/http/jwt-authentication.service";
import {MatPaginator, PageEvent} from "@angular/material/paginator";

export class Todo {
  constructor(
    public id: number,
    public description: String,
    public done: boolean,
    public targetDate: Date,
    public modifiedDate: Date,
    public user?:User
  ) {
  }
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
  content: T[],
  totalPages: number,
  totalElements: number,
  size:number,
  number:number
}

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgIf, NgFor, UpperCasePipe, DatePipe, MatPaginator],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {

  todos?: Todo[]
  messageSuccess?: String
  messageFail?:String
  username?: any
  pageSize = 3
  pageNumber = 0
  pageLength = 0

  constructor(private todoService: TodoDataService,
              private router: Router,
              private route: ActivatedRoute,
              private jwtAuthenticationService: JwtAuthenticationService) {
  }

  ngOnInit(): void {
    this.username = this.jwtAuthenticationService.getAuthenticatedUser()?.toString();
    this.route.queryParams.subscribe(
      {
        next:(param)=>{ this.messageSuccess= param['messageSuccess']
        },
        error:(param)=>{this.messageFail=param['messageFail']}
      }
    );
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.executeTodoService(this.username, this.pageNumber, this.pageSize).subscribe(
      {
        next:(response)=>{
          this.todos = response.content;
          this.pageLength = response.totalElements;
        },
        error:(err)=>{
          console.log(err);
        }
      }
    );

  }

  clearMessage(){
    this.messageSuccess=''
    this.messageFail=''
  }

  deleteTodoById(id: number) {
    const confirmation = window.confirm(`Are you sure to delete ${id} ?`);
    if (confirmation) {
      this.clearMessage();
      this.todoService.deleteTodoService(this.username, id).subscribe(
        {
          next: () => {
            this.refreshTodos();
            this.messageSuccess = `Delete of ${id} successful!!!`;
          },
          error: () => {
            this.messageFail = `Delete of ${id} failed`;
            this.refreshTodos();
          }
        }
      );
    }
  }

  updateTodo(id: number) {
    this.clearMessage()
    this.router.navigate(['todo', id])
  }

  addTodo() {
    this.clearMessage()
    this.router.navigate(['todo', -1])
  }

  handlePageEvent(event: PageEvent) {
    this.pageNumber = event.pageIndex
    this.pageSize = event.pageSize
    this.refreshTodos();
  }
}
