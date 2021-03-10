const router = require('express-promise-router')();
const alunoController = require('../controllers/aluno.controller');

// ==> Definindo as rotas do CRUD - 'Aluno':

router.post('/alunos', alunoController.createAluno);
router.get('/alunos', alunoController.listAllAlunos);
router.get('/alunos/:id', alunoController.findAlunoById);
router.get('/alunos/:id/notas', alunoController.somaNotasAluno);
router.put('/alunos/:id', alunoController.updateAlunoById);
router.delete('/alunos/:id', alunoController.deleteAlunoById);

router.get('/alunos/login', alunoController.loginAlunos);

module.exports = router;