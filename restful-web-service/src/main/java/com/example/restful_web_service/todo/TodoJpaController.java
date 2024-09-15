package com.example.restful_web_service.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/jpa")
public class TodoJpaController {
    @Autowired
    TodoJpaRepository todoJpaRepository;

    @GetMapping("/user/{username}/todos")
    public List<Todo> GetAllTodos(@PathVariable String username) {
        return todoJpaRepository.findByUsername(username);
    }

    @GetMapping("/user/{username}/todos/{id}")
    public Todo getTodoById(@PathVariable long id, @PathVariable String username) {
        return todoJpaRepository.findById(id).get();
    }

    @DeleteMapping("/user/{username}/todos/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable String username, @PathVariable long id) {
        todoJpaRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/user/{username}/todos/{id}")
    public ResponseEntity<Todo> updateById(@PathVariable String username,
                                           @PathVariable long id,
                                           @RequestBody Todo todo) {
        Todo todoUpdated = todoJpaRepository.save(todo);
        return new ResponseEntity<>(todoUpdated, HttpStatus.OK);
    }

    @PostMapping("/user/{username}/todos")
    public ResponseEntity<Void> saveTodo(@PathVariable String username,
                                         @RequestBody Todo todo) {
        todo.setUsername(username);
        Todo todoCreated = todoJpaRepository.save(todo);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(todoCreated.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }
}
