import {Component, OnInit} from '@angular/core';
import {Todo} from "../todos/todos.component";
import {TodoService} from "../service/data/todo.service";
import {ActivatedRoute, Router} from "@angular/router";
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
export class TodoComponent implements OnInit{
  id?:any
  todo = new Todo(this.id, '', false, new Date())

  constructor(private service:TodoService,
              private route:ActivatedRoute,
              private router:Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id!=-1){
    this.service.rechieveTodo('mai',this.id).subscribe(
      data => {
        this.todo = data
      }
    );
    }
  }

  saveTodo(todo: Todo) {
    if(this.id!=-1){
      this.service.updateTodo('mai',this.id, todo).subscribe(
        data=> this.router.navigate(['todos'])
      )
    }else{
      this.service.saveTodo('mai', todo).subscribe(
        data=>this.router.navigate(['todos'])
      )
    }
  }
}
