import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../../todos/todos.component";

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  executeTodoService(username:String){
    return this.http.get<Todo[]>(`http://localhost:8080/user/${username}/todos`)
  }
  deleteTodoService(username:String,id:number){
    return this.http.delete(`http://localhost:8080/user/${username}/todos/${id}`);
  }
  rechieveTodoService(username:String, id:any){
    return this.http.get<Todo>(`http://localhost:8080/user/${username}/todos/${id}`)
  }
}
