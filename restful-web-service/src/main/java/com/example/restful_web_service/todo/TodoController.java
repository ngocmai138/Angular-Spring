package com.example.restful_web_service.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoController {
    @Autowired
    TodoHardCodeService todoHardCodeService;

    @GetMapping("user/{username}/todos")
    public List<Todo> GetAllTodos(@PathVariable String username){
        return todoHardCodeService.getAll(username);
    }

    @GetMapping("user/{username}/todos/{id}")
    public Todo getTodoById(@PathVariable long id, @PathVariable String username){
        return todoHardCodeService.findById(id);
    }

    @DeleteMapping("user/{username}/todos/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable String username, @PathVariable long id){
        if (todoHardCodeService.deleleById(id)!=null)
            return ResponseEntity.noContent().build();
        else return ResponseEntity.notFound().build();
    }
    @PutMapping("user/{username}/todos/{id}")
    public ResponseEntity<Todo> updateById(@PathVariable String username,
                                           @PathVariable long id,
                                           @RequestBody Todo todo){
        Todo todoUpdated = todoHardCodeService.save(todo);
        return new ResponseEntity<>(todoUpdated, HttpStatus.OK);
    }
    @PostMapping("user/{username}/todos")
    public ResponseEntity<Void> saveTodo(@PathVariable String username,
                                           @RequestBody Todo todo){
        Todo todoCreated = todoHardCodeService.save(todo);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(todoCreated.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }
}
