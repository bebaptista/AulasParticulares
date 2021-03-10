const db = require("../config/database");

// ==> Método responsável por criar uma nova 'Aula':

exports.createAula = async (req, res) => {
  const { nota_professor, nota_aluno, confirmacao_professor, confirmacao_aluno, feedback_professor, feedback_aluno, materia_aula, dia_hora_aula, endereco, cidade, estado_federativo, id_professor, id_aluno } = req.body;
  const { rows } = await db.query(
    "INSERT INTO aula (nota_professor, nota_aluno, confirmacao_professor, confirmacao_aluno, feedback_professor, feedback_aluno, materia_aula, dia_hora_aula, endereco, cidade, estado_federativo, id_professor, id_aluno) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)",
    [nota_professor, nota_aluno, confirmacao_professor, confirmacao_aluno, feedback_professor, feedback_aluno, materia_aula, dia_hora_aula, endereco, cidade, estado_federativo, id_professor, id_aluno]
  );

  res.status(201).send({
    message: "Aula added successfully!",
    body: {
      aula: { nota_professor, nota_aluno, confirmacao_professor, confirmacao_aluno, feedback_professor, feedback_aluno, materia_aula, dia_hora_aula, endereco, cidade, estado_federativo, id_professor, id_aluno }
    },
  });
};

exports.listAllAulas = async (req, res) => {
  const response = await db.query('SELECT * FROM aula ORDER BY id_aula');
  res.status(200).send(response.rows);
};

exports.findAulaById = async (req, res) => {
  const aulaId = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM aula WHERE id_aula = $1', [aulaId]);
  res.status(200).send(response.rows);
}

exports.updateAulaById = async (req, res) => {
  const aulaId = parseInt(req.params.id);
  const { nota_professor, nota_aluno, confirmacao_professor, confirmacao_aluno, feedback_professor, feedback_aluno, materia_aula, dia_hora_aula, endereco, cidade, estado_federativo, id_professor, id_aluno } = req.body;

  const response = await db.query(
    "UPDATE aula SET nota_professor = $1, nota_aluno = $2, confirmacao_professor = $3, confirmacao_aluno = $4, feedback_professor = $5, feedback_aluno = $6, materia_aula = $7, dia_hora_aula = $8, endereco = $9, cidade = $10, estado_federativo = $11 WHERE id_aula = $12",
    [nota_professor, nota_aluno, confirmacao_professor, confirmacao_aluno, feedback_professor, feedback_aluno, materia_aula, dia_hora_aula, endereco, cidade, estado_federativo, aulaId]
  );

  res.status(200).send({ message: "Product Updated Successfully!" });
};

exports.deleteAulaById = async (req, res) => {
  const aulaId = parseInt(req.params.id);
  await db.query('DELETE FROM aula WHERE id_aula = $1', [aulaId]);

  res.status(200).send({ message: 'Product deleted successfully!', aulaId });
};