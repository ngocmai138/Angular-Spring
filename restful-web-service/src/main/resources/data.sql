drop database if exists `todolist`;
create database if not exists `todolist`;
use `todolist`;
create table todo(id int primary key auto_increment,
                  username varchar(255),
                  description varchar(255),
                  target_date date,
                  done boolean);
insert into todo(username, description, target_date, done)
values('mai', 'Learn Angular', sysdate(), false),
      ('mai','Learn IELTS 6.0', sysdate(), false),
      ('mai','Become senior fullstack Java Developer', sysdate(), false);