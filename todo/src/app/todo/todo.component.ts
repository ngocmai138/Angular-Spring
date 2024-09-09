import {Component, OnInit} from '@angular/core';
import {Todo} from "../todos/todos.component";
import {ActivatedRoute} from "@angular/router";
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
export class TodoComponent implements OnInit{

  id?:number
  todo = new Todo(0,'',false, new Date())
  saveTodo() {

  }
  constructor(private route:ActivatedRoute,
              private todoService: TodoDataService) {
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todoService.rechieveTodoService('mai',this.id).subscribe(
      data => this.todo = data
    );
  }
}
