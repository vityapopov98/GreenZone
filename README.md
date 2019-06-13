# GreenZone
web application to control our devices in smart home


Настройка локальной БД:

    create database greenhome; 
    create user 'greenuser'@'localhost' identified with mysql_native_password by '123456';
    grant all privileges on greenhome.* to 'greenuser'@'localhost';

