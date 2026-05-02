create database musculacaoSemMitos;
use musculacaoSemMitos;

create table usuario (
idUser int primary key auto_increment,
nome varchar(50),
email varchar(50),
senha varchar(50),
conheceMetodologia char(3),
constraint chk_conheceMetodologia check(conheceMetodologia in ('sim', 'nao'))
);
