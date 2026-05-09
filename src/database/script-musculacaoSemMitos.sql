create database musculacaoSemMitos;
use musculacaoSemMitos;

create table usuario (
idUser int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45),
objetivo varchar(45),
	constraint chkObjetivoUser check (objetivo in ('Ganhar Massa', 'Perder Peso', 'Recomposição Corporal', 'Saúde Geral')),
conheceMetodologia char(3),
	constraint chk_conheceMetodologia check(conheceMetodologia in ('sim', 'nao'))
);

create table registro_peso (
idRegistro int primary key auto_increment,
peso decimal(6,3),
dtRegistro date,
fkUsuario int,
	constraint fkRegistroPesoUser foreign key (fkUsuario)
		references usuario(idUser)
);

select * from usuario;