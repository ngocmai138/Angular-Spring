import {Component, OnInit} from '@angular/core';
import {NgIf, NgFor, UpperCasePipe, DatePipe} from "@angular/common";
import {TodoDataService} from "../service/data/todo-data.service";
import {response} from "express";
import {Router} from "@angular/router";

export class Todo{
  constructor(
    public id:number,
    public description:String,
    public done:boolean,
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
export class TodosComponent implements OnInit{

  todos? : Todo[]
  message?:String
  constructor(private todoService:TodoDataService,
              private router:Router) {
  }

  ngOnInit(): void {
    this.refreshTodos()
  }

  refreshTodos(){
    this.todoService.executeTodoService('mai').subscribe(
      response => {
        this.todos = response;
      }
    );

  }
  // todos = [
  //   new Todo(1, 'Learn to dance',false,new Date()),
  //   new Todo(2, 'Become an Expert at Angular', false, new Date()),
  //   new Todo(3, 'Visit India', false, new Date())
  // ]
  deleteTodoById(id: number) {
    this.todoService.deleteTodoService('mai', id).subscribe(
      response =>{
        console.log(`deleted ${id}`);
        this.refreshTodos();
        this.message=`Delete of ${id} successful!!!`;
      }
    );
  }

  updateTodo(id: number) {
    this.router.navigate(['todo',id])
  }

  addTodo() {
    this.router.navigate(['todo',-1])
  }
}
