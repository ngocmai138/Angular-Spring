import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Todo, User} from "../list-todos/list-todos.component";
import {TodoDataService} from "../service/data/todo-data.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe,
    MatPaginator,
    ReactiveFormsModule
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  id?: any
  todo = new Todo(this.id, '', false, new Date, new Date())
  todoForm!:FormGroup

  constructor(private route: ActivatedRoute,
              private service: TodoDataService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.todo.id= this.id
    this.todoForm = new FormGroup({
      description: new FormControl('', [Validators.required, Validators.minLength(5)]),
      targetDate: new FormControl('', Validators.required)
    })
    if (this.id != -1)
      this.service.rechieveTodo('mai', this.id).subscribe({
        next:(response)=>{
          this.todo = response;
          this.todoForm.patchValue({
            description:response.description,
            targetDate: response.targetDate
          });
        },
        error:(err) => {
          console.log("Error: "+err)
        }
      });
  }

  saveTodo() {
    this.todo.description = this.todoForm.get("description")?.value;
    this.todo.targetDate = this.todoForm.get("targetDate")?.value;
    if (this.id != -1) {
      this.service.updateTodo('mai', this.id, this.todo).subscribe(
        data => {
          this.router.navigate(['todos'])
        }
      );
    } else {
      this.service.saveTodo('mai', this.todo).subscribe(
        data => {
          this.router.navigate(['todos'])
        }
      )
    }
  }
}
