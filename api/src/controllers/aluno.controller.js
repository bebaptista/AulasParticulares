const db = require("../config/database");

// ==> Método responsável por criar um novo 'Aluno':

exports.createAluno = async (req, res) => {
  const { nome, email, senha, telefone, escola, cpf, ultimo_login, endereco, cidade, estado_federativo, ano } = req.body;
  const { rows } = await db.query(
    "INSERT INTO aluno (nome, email, senha, telefone, escola, cpf, ultimo_login, endereco, cidade, estado_federativo, ano) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
    [nome, email, senha, telefone, escola, cpf, ultimo_login, endereco, cidade, estado_federativo, ano]
  );

  res.status(201).send({
    message: "Aluno added successfully!",
    body: {
      aluno: { nome, email, senha, telefone, escola, cpf, ultimo_login, endereco, cidade, estado_federativo, ano }
    },
  });
};

exports.listAllAlunos = async (req, res) => {
  const response = await db.query('SELECT * FROM aluno ORDER BY nome');
  res.status(200).send(response.rows);
};

exports.findAlunoById = async (req, res) => {
  const alunoId = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM aluno WHERE cpf = $1', [alunoId]);
  res.status(200).send(response.rows);
}

exports.updateAlunoById = async (req, res) => {
  const alunoId = parseInt(req.params.id);
  const { nome, email, senha, telefone, escola, ultimo_login, endereco, cidade, estado_federativo, ano } = req.body;

  const response = await db.query(
    "UPDATE aluno SET nome = $1, email = $2, senha = $3, telefone = $4, escola = $5, ultimo_login = $6, endereco = $7, cidade = $8, estado_federativo = 9$, ano = 10$ WHERE cpf = $11",
    [nome, email, senha, telefone, escola, ultimo_login, endereco, cidade, estado_federativo, ano, alunoId]
  );

  res.status(200).send({ message: "Aluno Updated Successfully!" });
};

exports.deleteAlunoById = async (req, res) => {
  const alunoId = parseInt(req.params.id);
  await db.query('DELETE FROM aluno WHERE cpf = $1', [alunoId]);

  res.status(200).send({ message: 'Aluno deleted successfully!', alunoId });
};

exports.somaNotasAluno = async (req, res) => {
  const alunoId = parseInt(req.params.id);
  await db.query('UPDATE aluno SET nota_aluno = (SELECT AVG(nota_aluno) FROM aula WHERE cpf = $1) WHERE cpf = $1', [alunoId]);
  const response =  await db.query('SELECT nota_aluno FROM aluno WHERE cpf = $1', [alunoId]);
  res.status(200).send(response.rows);
}

exports.loginAlunos = async (req, res) => {
  const { email, senha } = req.body;
  const response = await db.query('SELECT email,senha FROM aluno WHERE email = $1 AND senha = $2', [email,senha]);
  res.status(200).send(response.rows);
}