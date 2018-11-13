create database if not exists users_sports_service;

use users_sports_service;

create table if not exists usuarios(
	id_usuario int not null auto_increment,
    nombre varchar(50) not null,
    apellido varchar(50) not null,
    correo varchar(50) not null,
    primary key(id_usuario)
)engine=INNODB;

create table if not exists equipos(
	id_equipo int not null auto_increment,
    nombre_equipo varchar(50) not null,
    logros int,
    primary key(id_equipo),
    id_user int,
    constraint fkequipos_usuarios foreign key(id_user) references usuarios(id_usuario)
)engine=INNODB;

create table if not exists deportes(
	id_deporte int not null auto_increment,
    nombre_deporte varchar(50),
    primary key(id_deporte)
)engine=INNODB;

create table if not exists deportes_usuarios(
	id_sport int not null,
    id_user1 int not null,
    primary key(id_sport,id_user1),
    constraint fkdeportes_usuarios foreign key(id_sport) references deportes(id_deporte),
    constraint fkusuarios_deportes foreign key(id_user1) references usuarios(id_usuario)
)engine=INNODB;

create table if not exists reto(
    id_reto int not null auto_increment,
    lugar varchar(50) not null,
    fecha date,
    primary key(id_reto)
)engine=INNODB;

create table if not exists restos_equipos(
    id_equipo1 int not null,
    id_reto1 int not null,
    primary key(id_equipo1,id_reto1),
    constraint fkequipo_retos foreign key(id_equipo1) references equipos(id_equipo),
    constraint fkretos_equipo foreign key(id_reto1) references reto(id_reto)
)engine=INNODB;










