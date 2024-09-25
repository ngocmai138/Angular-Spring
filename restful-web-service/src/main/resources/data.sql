drop database if exists `todolist`;
create database if not exists `todolist`;
use `todolist`;
create table todo(id int primary key auto_increment,
                  user_id int,
                  description varchar(255),
                  target_date timestamp,
                  modifiedDate timestamp,
                  done boolean);
insert into todo(user_id, description, target_date, done)
values('1', 'Learn Angular', sysdate(), false),
      ('1','Learn IELTS 6.0', sysdate(), false),
      ('1','Become senior fullstack Java Developer', sysdate(), false);