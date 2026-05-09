create database musculacaoSemMitos;
use musculacaoSemMitos;

create table usuario (
idUser int primary key auto_increment,
nome varchar(45),
email varchar(45) unique,
senha varchar(45),
objetivo varchar(45),
	constraint chkObjetivoUser check (objetivo in ('Ganhar Massa', 'Perder Peso', 'Recomposição Corporal', 'Saúde Geral')),
conheceMetodologia char(3),
	constraint chk_conheceMetodologia check(conheceMetodologia in ('sim', 'nao')),
pesoDesejado decimal(6,3),
dataDesejada date
);

create table registro_peso (
idRegistro int primary key auto_increment,
peso decimal(6,3),
dataRegistro date,
fkUsuario int,
	constraint fkRegistroPesoUser foreign key (fkUsuario)
		references usuario(idUser)
);

CREATE TABLE publicacao (
idPublicacao int primary key auto_increment,
titulo varchar(100),
conteudo varchar(600) not null,
dtPublicacao datetime default now(),
fkUsuario int not null,
idPublicacaoPai int,
  constraint fk_pub_usuario
    foreign key (fkUsuario) references usuario(idUser),
  constraint fk_pub_pai
    foreign key (idPublicacaoPai) references publicacao(idPublicacao)
);

CREATE TABLE publicacao_salva (
fkUsuario int not null,
fkPublicacao int not null,
dtSalvo datetime default now(),
  PRIMARY KEY (fkUsuario, fkPublicacao),
  CONSTRAINT fk_salva_usuario
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUser),
  CONSTRAINT fk_salva_publicacao
    FOREIGN KEY (fkPublicacao) REFERENCES publicacao(idPublicacao)
);

select * from usuario;

delete from usuario where idUser = 1;