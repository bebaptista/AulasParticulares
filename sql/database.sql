CREATE TYPE materia AS ENUM (
    'Matemática',
    'Português',
    'Física',
    'Química',
    'Biologia',
    'Filosofia',
    'Sociologia',
    'Artes',
    'Espanhol',
    'Redação',
    'Literatura',
    'Ciências',
    'Geografia',
    'História',
    'Inglês'
);

CREATE TYPE ano_escolar AS ENUM (
    'Primeiro ano',
    'Segundo ano',
    'Terceiro ano',
    'Quarto ano',
    'Quinto ano',
    'Sexto ano',
    'Setimo ano',
    'Oitavo ano',
    'Nono ano',
    'Primeiro ano do Ensino Medio',
    'Segundo ano do Ensino Medio',
    'Terceiro ano do Ensino Medio'
);

CREATE TYPE estado AS ENUM (
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins'
);

CREATE TABLE Aluno (
    nome varchar(255) NOT NULL,
    email varchar(255) NOT NULL UNIQUE,
    senha varchar(255) NOT NULL,
    telefone varchar(255),
    escola varchar(255),
    cpf char(11) PRIMARY KEY,
    ultimo_login timestamp,
    endereco varchar(255),
    cidade varchar(255),
    ano ano_escolar,
    estado_federativo estado,
    nota_aluno real
);

CREATE TABLE Professor (
    nome varchar(255) NOT NULL,
    email varchar(255) NOT NULL UNIQUE,
    senha varchar(255) NOT NULL,
    telefone varchar(255),
    cpf char(11) PRIMARY KEY,
    ultimo_login timestamp,
    endereco varchar(255),
    cidade varchar(255),
    preco_hora_aula money,
    horarios_disponiveis text,
    descricao text,
    estado_federativo estado,
    nota_professor real
); 

CREATE TABLE Aula (
    id_aula SERIAL PRIMARY KEY,
    nota_professor smallint,
    nota_aluno smallint,
    confirmacao_aluno boolean,
    confirmacao_professor boolean,
    feedback_aluno text,
    feedback_professor text,
    materia_aula materia,
    dia_hora_aula timestamp,
    endereco varchar(255),
    cidade varchar(255),
    id_professor char(11) REFERENCES Professor,
    id_aluno char(11) REFERENCES Aluno,
    estado_federativo estado
);

CREATE TABLE Materia_Professor(
    id_professor char(11) REFERENCES Professor,
    aptidao_professor materia
);

