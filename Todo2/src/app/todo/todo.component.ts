import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Todo} from "../list-todos/list-todos.component";
import {TodoDataService} from "../service/data/todo-data.service";
import {FormsModule} from "@angular/forms";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  id?: any
  todo = new Todo(this.id, '', false, new Date)

  constructor(private route: ActivatedRoute,
              private service: TodoDataService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.todo.id= this.id
    if (this.id != -1)
      this.service.rechieveTodo('mai', this.id).subscribe(
        data => this.todo = data
      );
  }

  saveTodo(todo: Todo) {
    console.log(`id of todo: ${todo.id}`)
    if (todo.id != -1) {
      this.service.updateTodo('mai', todo.id, todo).subscribe(
        data => {
          this.router.navigate(['todos'])
        }
      );
    } else {
      this.service.saveTodo('mai', todo).subscribe(
        data => {
          this.router.navigate(['todos'])
        }
      )
    }
  }
}
