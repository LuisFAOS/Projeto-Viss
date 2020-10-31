CREATE DATABASE vissBD;
USE vissBD;

CREATE TABLE imagem (
	ID_imagem INT(100) PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    `key` VARCHAR(200) NOT NULL,
    tamanho INT (25) NOT NULL,
	created_at VARCHAR(100) NOT NULL
);

CREATE TABLE localidade (
	ID_localidade INT(100) PRIMARY KEY AUTO_INCREMENT,
    NOME VARCHAR(100) NOT NULL,
    local_type VARCHAR(10) NOT NULL,
    CEP VARCHAR(20) NULL,
    QTD_registros INT(100) DEFAULT 0
);

CREATE TABLE usuario (
	ID_usuario INT(100) PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    senha VARCHAR(150) NOT NULL,
    CEP VARCHAR(20) NOT NULL,
    ID_imagem INT (100) NULL,
    FOREIGN KEY (ID_imagem) REFERENCES imagem(ID_imagem)
);

CREATE TABLE registros (
	ID_registros INT(100) PRIMARY KEY AUTO_INCREMENT,
    ID_localidade INT(100) NOT NULL,
	ID_usuario INT(100) NOT NULL,
    tipo_registro VARCHAR(50) NOT NULL,
    desc_registro VARCHAR(200) NULL,
    data_ocorrido VARCHAR(100) NOT NULL, /* data em que ocorreu o acidente,assalto,furto ou etc */
    data_criacao VARCHAR(100) NOT NULL, /* data de criação do acidente,assalto,furto ou etc */
	FOREIGN KEY (ID_localidade) REFERENCES localidade(ID_localidade),
	FOREIGN KEY (ID_usuario) REFERENCES usuario(ID_usuario)
);