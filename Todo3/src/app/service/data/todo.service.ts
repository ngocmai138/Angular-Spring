import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../../todos/todos.component";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  rechieveAllTodo(username:String){
    return this.http.get<Todo[]>(`http://localhost:8080/user/${username}/todos`)
  }
  rechieveTodo(username:String, id:any){
    return this.http.get<Todo>(`http://localhost:8080/user/${username}/todos/${id}`)
  }
  saveTodo(username:String, todo:Todo){
    return this.http.post(`http://localhost:8080/user/${username}/todos`,todo)
  }
  updateTodo(username:String, id:any, todo: any){
    return this.http.put(`http://localhost:8080/user/${username}/todos/${id}`, todo)
  }
  removeTodo(username:String, id:any){
    return this.http.delete(`http://localhost:8080/user/${username}/todos/${id}`)
  }
}

