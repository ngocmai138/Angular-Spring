import {Component, OnInit} from '@angular/core';
import {Todo} from "../todos/todos.component";
import {ActivatedRoute, Router} from "@angular/router";
import {TodoDataService} from "../service/data/todo-data.service";
import {FormsModule} from "@angular/forms";
import {DatePipe, NgIf} from "@angular/common";
import {JwtAuthenticationSeriveService} from "../service/http/jwt-authentication-serive.service";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe,
    NgIf
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  id?: any
  todo = new Todo(this.id, '', false, new Date())
  username?:any

  saveTodo() {
    if(this.id!=-1){
      this.todoService.updateTodoService(this.username, this.id, this.todo).subscribe(
        {
          next:()=>{
              this.router.navigate(['todos'], {
                queryParams:{messageSuccess:`update of ${this.id} successful`}})
          },
          error:()=>{
            this.router.navigate(['todos'], {
              queryParams:{messageFail:`update of ${this.id} fail`}})
          }
        }
      );
    }else {
      this.todoService.saveTodoService(this.username,this.todo).subscribe(
        {
          next:()=>{
            this.router.navigate(['todos'], {
              queryParams:{messageSuccess:`Create successful`}})
          },
          error:()=>{
            this.router.navigate(['todos'], {
              queryParams:{messageFail:`Create fail`}})
          }
        }
      );
    }
  }

  constructor(private route: ActivatedRoute,
              private todoService: TodoDataService,
              private router: Router,
              private jwtAuthenticationSeriveService:JwtAuthenticationSeriveService) {
  }

  ngOnInit(): void {
    this.username = this.jwtAuthenticationSeriveService.getAuthenticatedUser()?.toString();
    this.id = this.route.snapshot.params['id'];
    if (this.id != -1) {
      this.todoService.rechieveTodoService(this.username, this.id).subscribe(
        data => this.todo = data
      );
    }
  }
}
