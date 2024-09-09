package com.example.restful_web_service.hello;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class HelloController {
    @GetMapping("/hello")
    public String hello() {
        return "Hello World";
    }

    @GetMapping("/hello-bean")
    public HelloWorldBean helloBean() {
        return new HelloWorldBean("Ahaa Hello world Bean");
    }

    @GetMapping("/hello-error")
    public Exception helloBeanError() {
        return new RuntimeException("Some error occurred!!!!");
    }
    @GetMapping("/hello-variable-path/{name}")
    public HelloWorldBean helloVariablePath(@PathVariable String name) {
        return new HelloWorldBean("Hello World, "+name);
    }
}
