package com.example.restful_web_service.todo;

import jakarta.persistence.*;

import java.util.Date;
@Entity
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST, CascadeType.MERGE,CascadeType.DETACH,CascadeType.REFRESH})
    @JoinColumn(name = "user_id")
    private User user;
    private String description;
    private boolean done;
    private Date targetDate;
    private Date modifiedDate;

    public Todo() {
    }

    public Todo(long id, String description, boolean done, Date targetDate) {
        this.id = id;
        this.description = description;
        this.done = done;
        this.targetDate = targetDate;
    }

    @Override
    public String toString() {
        return "Todo{" +
                "id=" + id +
                ", user=" + user +
                ", description='" + description + '\'' +
                ", done=" + done +
                ", targetDate=" + targetDate +
                ", modifiedDate=" + modifiedDate +
                '}';
    }

    @PreUpdate
    protected void onUpdate() {
        modifiedDate = new Date();
    }

    @PrePersist
    protected void onPrePersist() {
        modifiedDate = new Date();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isDone() {
        return done;
    }

    public void setDone(boolean done) {
        this.done = done;
    }

    public Date getTargetDate() {
        return targetDate;
    }

    public void setTargetDate(Date targetDate) {
        this.targetDate = targetDate;
    }

    public Date getModifiedDate() {
        return modifiedDate;
    }

    public void setModifiedDate(Date modifiedDate) {
        this.modifiedDate = modifiedDate;
    }
}
