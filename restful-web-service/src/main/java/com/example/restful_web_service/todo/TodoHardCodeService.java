package com.example.restful_web_service.todo;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class TodoHardCodeService {
    public static List<Todo> todos = new ArrayList<>();
    public static long counter = 0;

    static {
        todos.add(new Todo(++counter, "mai", "Learn Angular", false, new Date()));
        todos.add(new Todo(++counter, "mai", "Learn IELTS 6.0", false, new Date()));
        todos.add(new Todo(++counter, "mai", "Become senior fullstack Java Developer", false, new Date()));
    }

    public List<Todo> getAll(String username) {
        return todos;
    }

    public Todo deleleById(long id) {
        Todo todo = findById(id);
        if (todo == null)
            return null;
        if (todos.remove(todo))
            return todo;
        else
            return null;
    }

    public Todo save(Todo todo){
        if(todo.getId()==-1 || todo.getId()==0){
            todo.setId(++counter);
            todos.add(todo);
        }else {
            deleleById(todo.getId());
            todos.add(todo);
        }
        return todo;
    }

    public Todo findById(long id) {
        for (Todo todo : todos) {
            if (todo.getId() == id) {
                return todo;
            }
        }
        return null;
    }
}
