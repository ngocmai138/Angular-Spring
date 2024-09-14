import {Component, OnInit} from '@angular/core';
import {Todo} from "../todos/todos.component";
import {ActivatedRoute, Router} from "@angular/router";
import {TodoDataService} from "../service/data/todo-data.service";
import {FormsModule} from "@angular/forms";
import {DatePipe, NgIf} from "@angular/common";

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

  saveTodo() {
    if(this.id!=-1){
      this.todoService.updateTodoService('mai', this.id, this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos'])
        }
      );
    }else {
      this.todoService.saveTodoService('mai',this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos'])
        }
      );
    }
  }

  constructor(private route: ActivatedRoute,
              private todoService: TodoDataService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id != -1) {
      this.todoService.rechieveTodoService('mai', this.id).subscribe(
        data => this.todo = data
      );
    }
  }
}
