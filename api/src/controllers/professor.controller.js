const db = require("../config/database");

// ==> Método responsável por criar um novo 'Professor': 

exports.createProfessor = async (req, res) => {
  const { nome, email, senha, telefone, cpf, descricao, ultimo_login, endereco, cidade, estado_federativo, preco_hora_aula, horarios_disponiveis } = req.body;
  const { rows } = await db.query(
    "INSERT INTO professor (nome, email, senha, telefone, cpf, descricao, ultimo_login, endereco, cidade, estado_federativo, preco_hora_aula, horarios_disponiveis) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)",
    [nome, email, senha, telefone, cpf, descricao, ultimo_login, endereco, cidade, estado_federativo, preco_hora_aula, horarios_disponiveis]
  );

  res.status(201).send({
    message: "Professor added successfully!",
    body: {
      professor: { nome, email, senha, telefone, cpf, descricao, ultimo_login, endereco, cidade, estado_federativo, preco_hora_aula, horarios_disponiveis }
    },
  });
};

exports.listAllProfessores = async (req, res) => {
  const response = await db.query('SELECT * FROM professor ORDER BY nome');
  res.status(200).send(response.rows);
};

exports.findProfessorById = async (req, res) => {
  const professorId = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM professor WHERE cpf = $1', [professorId]);
  res.status(200).send(response.rows);
}

exports.updateProfessorById = async (req, res) => {
  const professorId = parseInt(req.params.id);
  const { nome, email, senha, telefone, descricao, ultimo_login, endereco, cidade, estado_federativo, preco_hora_aula, horarios_disponiveis } = req.body;

  const response = await db.query(
    "UPDATE professor SET nome = $1, email = $2, senha = $3, telefone = $4, descricao = $5, ultimo_login = $6, endereco = $7, cidade = $8, estado_federativo = $9, preco_hora_aula = $10, horarios_disponiveis = $11 WHERE cpf = $12",
    [nome, email, senha, telefone, descricao, ultimo_login, endereco, cidade, estado_federativo, preco_hora_aula, horarios_disponiveis, professorId]
  );

  res.status(200).send({ message: "Professor Updated Successfully!" });
};

exports.deleteProfessorById = async (req, res) => {
  const professorId = parseInt(req.params.id);
  await db.query('DELETE FROM professor WHERE cpf = $1', [professorId]);

  res.status(200).send({ message: 'Professor deleted successfully!', professorId });
};

exports.createMateria = async (req, res) => {
  const id_professor = parseInt(req.params.id);
  const { aptidao_professor } = req.body;
  const { rows } = await db.query(
    "INSERT INTO materia_professor (id_professor, aptidao_professor) VALUES ($1, $2)",
    [id_professor, aptidao_professor]
  );
  
  res.status(201).send({
    message: "Materia added successfully!",
    body: {
      materia_professor: { id_professor, aptidao_professor }
    },
  });
};

exports.findMaterias = async (req, res) => {
  const professorId = parseInt(req.params.id);
  const response = await db.query('SELECT aptidao_professor FROM materia_professor WHERE id_professor = $1', [professorId]);
  res.status(200).send(response.rows);
}

exports.deleteMateria = async (req, res) => {
  const professorId = parseInt(req.params.id);
  await db.query('DELETE FROM materia_professor WHERE id_professor = $1', [professorId]);

  res.status(200).send({ message: 'Materia deleted successfully!', professorId });
};

exports.somaNotasProfessor = async (req, res) => {
  const professorId = parseInt(req.params.id);
  await db.query('UPDATE professor SET nota_professor = (SELECT AVG(nota_professor) FROM aula WHERE cpf = $1) WHERE cpf = $1', [professorId]);
  const response =  await db.query('SELECT nota_professor FROM professor WHERE cpf = $1', [professorId]);
  res.status(200).send(response.rows);
}

exports.loginProfessores = async (req, res) => {
  const { email, senha } = req.body;
  const response = await db.query('SELECT email,senha FROM professor WHERE email = $1 AND senha = $2', [email,senha]);
  res.status(200).send(response.rows);
}