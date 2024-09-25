package com.example.restful_web_service.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/jpa")
public class TodoJpaPageAndSortController {
    @Autowired
    TodoJpaRepository todoJpaRepository;
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user/{username}/todos")
    public ResponseEntity<Page<Todo>>  GetAllTodos(@PathVariable String username,
                                  @RequestParam(defaultValue = "0") int pageNumber,
                                  @RequestParam(defaultValue = "3") int pageSize) {
        User user = userRepository.findByUsername(username);
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Pageable pageElements = PageRequest.of(pageNumber, pageSize, Sort.by( "modifiedDate"));
        return ResponseEntity.ok(todoJpaRepository.findByUser(user,pageElements));
    }

    @GetMapping("/user/{username}/todos/{id}")
    @PostAuthorize("returnObject.user.username==authentication.name")
    public Todo getTodoById(@PathVariable long id, @PathVariable String username) {
        return todoJpaRepository.findById(id).orElse(null);
    }

    @DeleteMapping("/user/{username}/todos/{id}")
//    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN','ROLE_USER') and #username == authentication.name")
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
        User user = userRepository.findByUsername(username);
        todo.setUser(user);
        Todo todoCreated = todoJpaRepository.save(todo);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(todoCreated.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }
}
