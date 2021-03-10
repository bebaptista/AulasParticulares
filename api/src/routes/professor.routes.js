const router = require('express-promise-router')();
const professorController = require('../controllers/professor.controller');

// ==> Definindo as rotas do CRUD - 'Professor':

// ==> Rota responsável por criar um novo 'Professor': (POST): localhost:3000/api/professors
router.post('/professores', professorController.createProfessor);
router.get('/professores', professorController.listAllProfessores);
router.get('/professores/:id', professorController.findProfessorById);
router.get('/professores/:id/notas', professorController.somaNotasProfessor);
router.put('/professores/:id', professorController.updateProfessorById);
router.delete('/professores/:id', professorController.deleteProfessorById);

router.post('/professores/:id/materias', professorController.createMateria);
router.get('/professores/:id/materias', professorController.findMaterias);
router.delete('/professores/:id/materias', professorController.deleteMateria);

router.get('/professores/login', professorController.loginProfessores);

module.exports = router;