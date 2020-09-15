DROP DATABASE vissBD;
CREATE DATABASE vissBD;
USE vissBD;

CREATE TABLE rua (
	ID_rua INT(100) PRIMARY KEY AUTO_INCREMENT,
    CEP VARCHAR(20) NOT NULL,
    QTD_registros INT(100) DEFAULT 0
);

CREATE TABLE usuario (
	ID_usuario INT(100) PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    senha VARCHAR(150) NOT NULL,
    CEP VARCHAR(20) NOT NULL
);

CREATE TABLE registros (
	ID_registros INT(100) PRIMARY KEY AUTO_INCREMENT,
    ID_rua INT(100) NOT NULL,
	ID_usuario INT(100) NOT NULL,
    tipo_registro VARCHAR(50) NOT NULL,
    desc_registro VARCHAR(200) NULL,
    data_ocorrido VARCHAR(100) NOT NULL, /* data em que ocorreu o acidente,assalto,furto ou etc */
    data_criacao VARCHAR(100) NOT NULL, /* data de criação do acidente,assalto,furto ou etc */
	FOREIGN KEY (ID_rua) REFERENCES rua(ID_rua),
	FOREIGN KEY (ID_usuario) REFERENCES usuario(ID_usuario)
);

SELECT * FROM usuario WHERE email="testador@test.com" or email="testador@test.com" and senha="asdasd"