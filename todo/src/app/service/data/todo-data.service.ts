import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../../todos/todos.component";
import {API_URL} from "../../app.constants";

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  executeTodoService(username:String){
    return this.http.get<Todo[]>(`${API_URL}user/${username}/todos`)
  }
  deleteTodoService(username:String,id:number){
    return this.http.delete(`${API_URL}user/${username}/todos/${id}`);
  }
  rechieveTodoService(username:String, id:any){
    return this.http.get<Todo>(`${API_URL}user/${username}/todos/${id}`)
  }
  updateTodoService(username:String, id:any, todo : any){
    return this.http.put(`${API_URL}user/${username}/todos/${id}`, todo)
  }
  saveTodoService(username:String, todo:any){
    return this.http.post(`${API_URL}user/${username}/todos`, todo)
  }
}
