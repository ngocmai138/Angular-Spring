import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../../list-todos/list-todos.component";

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }
  rechieveAllTodo(username:any){
    return this.http.get<Todo[]>(`http://localhost:8080/user/${username}/todos`)
  }
  updateTodo(username: any, id: any, todo:any){
    return this.http.put(`http://localhost:8080/user/${username}/todos/${id}`, todo)
  }
  rechieveTodo(username:any, id: any){
    return this.http.get<Todo>(`http://localhost:8080/user/${username}/todos/${id}`)
  }
  saveTodo(username:any, todo:Todo){
    return this.http.post<Todo>(`http://localhost:8080/user/${username}/todos`, todo)
  }
  deleteTodo(username:any, id:any){
    return this.http.delete(`http://localhost:8080/user/${username}/todos/${id}`)
  }
}
