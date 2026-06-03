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


CREATE TABLE influenciadores (
idInfluenciador int primary key auto_increment,
nomeInfluenciador varchar(45),
social varchar(45),
imagem varchar(255)
);

CREATE TABLE favorito_influenciador (
    fkUsuario INT,
    fkInfluenciador INT,
    PRIMARY KEY (fkUsuario, fkInfluenciador),
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUser),
    FOREIGN KEY (fkInfluenciador) REFERENCES influenciadores(idInfluenciador)
);

-- drop table influenciadores;

insert into influenciadores (nomeInfluenciador, social, imagem) values
('Science Fitness', 'https://www.instagram.com/_sciencefitness/', '../assets/imgs/influenciadores/science-fitness.jpg'),
('Mr Saizen', 'https://www.instagram.com/mrsaizen/', '../assets/imgs/influenciadores/mr-saizen.png'),
('Samuel Meller', 'https://www.instagram.com/samuel_mellerr/', '../assets/imgs/influenciadores/samuel-meller.png'),
('Pedro Arthur', 'https://www.instagram.com/pedr0_arthur/', '../assets/imgs/influenciadores/pedro-artur.png'),
('Lorenzo Dylan', 'https://www.instagram.com/lorenzodylann/', '../assets/imgs/influenciadores/lorenzo-dylan.png'),
('Garin', 'https://www.instagram.com/garin_oficial/', '../assets/imgs/influenciadores/garin.png');

select * from usuario;
select * from registro_peso;

update registro_peso set dataRegistro = '2026-04-29' where idRegistro = 1;
insert into registro_peso values
(default, 72.400, '2026-05-06', 3);

delete from usuario where idUser = 1;

select p.peso, u.pesoDesejado, DATEDIFF(u.dataDesejada, now()) as diasParaMeta
	from usuario as u join registro_peso as p
		on u.idUser = p.fkUsuario;
        
SELECT peso, DATE_FORMAT(dataRegistro, '%d/%m') as data_grafico 
        FROM registro_peso 
        WHERE fkUsuario = ${idUsuario} 
        ORDER BY idRegistro DESC LIMIT ${limite_linhas};

select * from usuario;
delete from usuario where idUser = 6;

update usuario set dataDesejada = '2026-06-21' where idUser = 3;


create view vw_DiasRestantes as select p.peso as pesoAtual, u.pesoDesejado as pesoDesejado, DATEDIFF(u.dataDesejada, now()) as diasParaMeta, u.objetivo as objetivo
	from usuario as u join registro_peso as p
		on u.idUser = p.fkUsuario
        where u.idUser = 1
        order by p.idRegistro desc limit 1;
        
select * from vw_DiasRestantes;

show create view vw_DiasRestantes;

create table registro_agua (
idRegistroAgua int primary key auto_increment,
quantidade decimal(5,2),
dataRegistro datetime default now(),
fkUsuario int,
	constraint fkRegistroAguaUser foreign key (fkUsuario)
		references usuario(idUser)
);