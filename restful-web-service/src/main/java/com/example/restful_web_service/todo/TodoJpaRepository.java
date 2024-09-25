package com.example.restful_web_service.todo;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public interface TodoJpaRepository extends JpaRepository<Todo, Long> {
    List<Todo> findByUser(User user);
    Page<Todo> findByUser(User user, Pageable pageable);
    List<Todo> findByUserOrderByModifiedDateDesc(User user);
}
