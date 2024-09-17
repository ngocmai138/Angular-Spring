import {Component, OnInit} from '@angular/core';
import {NgIf, NgFor, UpperCasePipe, DatePipe} from "@angular/common";
import {TodoDataService} from "../service/data/todo-data.service";
import {response} from "express";
import {ActivatedRoute, Router} from "@angular/router";
import {JwtAuthenticationSeriveService} from "../service/http/jwt-authentication-serive.service";

export class Todo {
  constructor(
    public id: number,
    public description: String,
    public done: boolean,
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
export class TodosComponent implements OnInit {

  todos?: Todo[]
  messageSuccess?: String
  messageFail?:String
  username?: any

  constructor(private todoService: TodoDataService,
              private router: Router,
              private route: ActivatedRoute,
              private jwtAuthenticationSeriveService: JwtAuthenticationSeriveService) {
  }

  ngOnInit(): void {
    this.username = this.jwtAuthenticationSeriveService.getAuthenticatedUser()?.toString();
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
    this.todoService.executeTodoService(this.username).subscribe(
      response => {
        this.todos = response;
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
}
