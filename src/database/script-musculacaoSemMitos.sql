create database musculacaoSemMitos;
use musculacaoSemMitos;

create table usuario (
idUser int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45),
conheceMetodologia char(3),
constraint chk_conheceMetodologia check(conheceMetodologia in ('sim', 'nao'))
);

select * from usuario;