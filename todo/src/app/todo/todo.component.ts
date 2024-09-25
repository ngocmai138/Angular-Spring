import {Component, OnInit} from '@angular/core';
import {Todo, User} from "../todos/todos.component";
import {ActivatedRoute, Router} from "@angular/router";
import {TodoDataService} from "../service/data/todo-data.service";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {DatePipe, NgIf} from "@angular/common";
import {JwtAuthenticationService} from "../service/http/jwt-authentication.service";

@Component({
  selector: 'app-todo',
  standalone: true,
  providers:[DatePipe],
  imports: [
    DatePipe,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  id?: any
  todo = new Todo(this.id, '', false, new Date(),new Date())
  username?:any
  todoForm!:FormGroup

  // updateForm(){
  //   this.todoForm.patchValue({
  //     description: this.todo.description,
  //     targetDate: new FormControl(this.datePipe.transform(this.todo.targetDate, 'yyyy-MM-dd'), [Validators.required])
  //   })
  // }

  saveTodo() {
    this.todo.description = this.todoForm.get('description')?.value || '';
    this.todo.targetDate = new Date(this.todoForm.get('targetDate')?.value || new Date());
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
              private jwtAuthenticationService:JwtAuthenticationService) {
    this.todoForm = new FormGroup({
      description: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
      targetDate: new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
    this.username = this.jwtAuthenticationService.getAuthenticatedUser()?.toString();
    this.id = this.route.snapshot.params['id'];
    if (this.id != -1) {
      this.todoService.rechieveTodoService(this.username, this.id).subscribe(
        data => {this.todo = data;
        this.todoForm.patchValue({
          description:data.description,
          targetDate:data.targetDate
        })}
      );
    }
  }
}
