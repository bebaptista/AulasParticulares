const db = require("../config/database");

exports.recuperaReclamacoes = async (req, res) => {
    const response =  await db.query('SELECT ((SELECT COUNT(id_aula) FROM aula WHERE feedback_aluno IS NOT NULL)+(SELECT COUNT(id_aula) FROM aula WHERE feedback_professor IS NOT NULL))*100/(SELECT COUNT(id_aula) FROM aula) AS reclamacoes');
    res.status(200).send(response.rows);
}

exports.recuperaUsuariosAtivos = async (req, res) => {
    const response =  await db.query("SELECT (SELECT COUNT(cpf) FROM aluno WHERE ultimo_login>= NOW() - INTERVAL '30 days')+(SELECT COUNT(cpf) FROM professor WHERE ultimo_login>= NOW() - INTERVAL '30 days') AS usuariosativos");
    res.status(200).send(response.rows);
}

exports.recuperaUsuarios = async (req, res) => {
    const response =  await db.query("SELECT (SELECT COUNT(cpf) FROM aluno)+(SELECT COUNT(cpf) FROM professor) AS usuarios");
    res.status(200).send(response.rows);
}

exports.recuperaConfirmacoes = async (req, res) => {
    const response =  await db.query('SELECT(SELECT COUNT(id_aula) FROM aula WHERE confirmacao_aluno = true AND confirmacao_professor = true)*100/(SELECT COUNT(id_aula) FROM aula) AS confirmacoes');
    res.status(200).send(response.rows);
}

exports.recuperaTaxaProfessorAluno = async (req, res) => {
    const response =  await db.query('SELECT (SELECT COUNT(cpf) FROM aluno)/(SELECT COUNT(cpf) FROM professor) AS taxaalunoprofessor');
    res.status(200).send(response.rows);
}

exports.recuperaTaxaProfessorMatematica = async (req, res) => {
    const response =  await db.query("SELECT COUNT(id_professor) AS matematica FROM materia_professor WHERE aptidao_professor = 'Matemática'");
    res.status(200).send(response.rows);
}

exports.recuperaTaxaProfessorPortugues = async (req, res) => {
    const response =  await db.query("SELECT COUNT(id_professor) AS portugues FROM materia_professor WHERE aptidao_professor = 'Português'");
    res.status(200).send(response.rows);
}

exports.recuperaTaxaProfessorFisica = async (req, res) => {
    const response =  await db.query("SELECT COUNT(id_professor) AS fisica FROM materia_professor WHERE aptidao_professor = 'Física'");
    res.status(200).send(response.rows);
}

exports.recuperaTaxaProfessorQuimica = async (req, res) => {
    const response =  await db.query("SELECT COUNT(id_professor) AS quimica FROM materia_professor WHERE aptidao_professor = 'Química'");
    res.status(200).send(response.rows);
}

exports.recuperaTaxaProfessorBiologia = async (req, res) => {
    const response =  await db.query("SELECT COUNT(id_professor) AS biologia FROM materia_professor WHERE aptidao_professor = 'Biologia'");
    res.status(200).send(response.rows);
}

exports.recuperaTaxaProfessorFilosofia = async (req, res) => {
    const response =  await db.query("SELECT COUNT(id_professor) AS filosofia FROM materia_professor WHERE aptidao_professor = 'Filosofia'");
    res.status(200).send(response.rows);
}

exports.recuperaTaxaProfessorSociologia = async (req, res) => {
    const response =  await db.query("SELECT COUNT(id_professor) AS sociologia FROM materia_professor WHERE aptidao_professor = 'Sociologia'");
    res.status(200).send(response.rows);
}

exports.recuperaTaxaProfessorArtes = async (req, res) => {
    const response =  await db.query("SELECT COUNT(id_professor) AS artes FROM materia_professor WHERE aptidao_professor = 'Artes'");
    res.status(200).send(response.rows);
}

exports.recuperaTaxaProfessorEspanhol = async (req, res) => {
    const response =  await db.query("SELECT COUNT(id_professor) AS espanhol FROM materia_professor WHERE aptidao_professor = 'Espanhol'");
    res.status(200).send(response.rows);
}

exports.recuperaTaxaProfessorRedacao = async (req, res) => {
    const response =  await db.query("SELECT COUNT(id_professor) AS redacao FROM materia_professor WHERE aptidao_professor = 'Redação'");
    res.status(200).send(response.rows);
}

exports.recuperaTaxaProfessorLiteratura = async (req, res) => {
    const response =  await db.query("SELECT COUNT(id_professor) AS literatura FROM materia_professor WHERE aptidao_professor = 'Literatura'");
    res.status(200).send(response.rows);
}

exports.recuperaTaxaProfessorCiencias = async (req, res) => {
    const response =  await db.query("SELECT COUNT(id_professor) AS ciencias FROM materia_professor WHERE aptidao_professor = 'Ciências'");
    res.status(200).send(response.rows);
}

exports.recuperaTaxaProfessorGeografia = async (req, res) => {
    const response =  await db.query("SELECT COUNT(id_professor) AS geografia FROM materia_professor WHERE aptidao_professor = 'Geografia'");
    res.status(200).send(response.rows);
}

exports.recuperaTaxaProfessorHistoria = async (req, res) => {
    const response =  await db.query("SELECT COUNT(id_professor) AS historia FROM materia_professor WHERE aptidao_professor = 'História'");
    res.status(200).send(response.rows);
}

exports.recuperaTaxaProfessorIngles = async (req, res) => {
    const response =  await db.query("SELECT COUNT(id_professor) AS ingles FROM materia_professor WHERE aptidao_professor = 'Inglês'");
    res.status(200).send(response.rows);
}

exports.recuperaTaxaProfessorMateria = async (req, res) => {
    const response =  await db.query(
        "SELECT 'matematica', COUNT (*) FROM materia_professor WHERE aptidao_professor = 'Matemática'"+
        "UNION SELECT 'portugues', COUNT (*) FROM materia_professor WHERE aptidao_professor = 'Português'"+
        "UNION SELECT 'fisica', COUNT (*) FROM materia_professor WHERE aptidao_professor = 'Física'"+
        "UNION SELECT 'quimica', COUNT (*) FROM materia_professor WHERE aptidao_professor = 'Química'"+
        "UNION SELECT 'biologia', COUNT (*) FROM materia_professor WHERE aptidao_professor = 'Biologia'"+
        "UNION SELECT 'filosofia', COUNT (*) FROM materia_professor WHERE aptidao_professor = 'Filosofia'"+
        "UNION SELECT 'sociologia', COUNT (*) FROM materia_professor WHERE aptidao_professor = 'Sociologia'"+
        "UNION SELECT 'artes', COUNT (*) FROM materia_professor WHERE aptidao_professor = 'Artes'"+
        "UNION SELECT 'espanhol', COUNT (*) FROM materia_professor WHERE aptidao_professor = 'Espanhol'"+
        "UNION SELECT 'redacao', COUNT (*) FROM materia_professor WHERE aptidao_professor = 'Redação'"+
        "UNION SELECT 'literatura', COUNT (*) FROM materia_professor WHERE aptidao_professor = 'Literatura'"+
        "UNION SELECT 'ciencias', COUNT (*) FROM materia_professor WHERE aptidao_professor = 'Ciências'"+
        "UNION SELECT 'geografia', COUNT (*) FROM materia_professor WHERE aptidao_professor = 'Geografia'"+
        "UNION SELECT 'historia', COUNT (*) FROM materia_professor WHERE aptidao_professor = 'História'"+
        "UNION SELECT 'ingles', COUNT (*) FROM materia_professor WHERE aptidao_professor = 'Inglês'"
    );
    res.status(200).send(response.rows);
}