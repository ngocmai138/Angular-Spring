import {Component, OnInit} from '@angular/core';
import {DatePipe, NgForOf, UpperCasePipe} from "@angular/common";
import {TodoService} from "../service/data/todo.service";
import {Router} from "@angular/router";
export class Todo{
  constructor(
    public id : number,
    public description: String,
    public done: boolean,
    public targetDate: Date
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
export class TodosComponent implements OnInit{
  todos? : Todo[];
  protected readonly Todo = Todo;
  constructor(private service:TodoService,
              private router:Router) {
  }
  ngOnInit(): void {
    this.refreshAllTodo()
  }

  refreshAllTodo(){
    this.service.rechieveAllTodo('mai').subscribe(
      data => this.todos = data
    );
  }

  updateTodo(todo: Todo) {
    this.router.navigate(['todo',todo.id])
  }

  removeTodo(todo: Todo) {
    this.service.removeTodo('mai', todo.id).subscribe(
      data => this.refreshAllTodo()
    )
  }

  addNewTodo() {
    this.router.navigate(['todo', -1])
  }
}
