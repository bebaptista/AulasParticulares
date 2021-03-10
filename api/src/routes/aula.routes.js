const router = require('express-promise-router')();
const aulaController = require('../controllers/aula.controller');

// ==> Definindo as rotas do CRUD - 'Aula':

// ==> Rota responsável por criar uma nova 'Aula': (POST): localhost:3000/api/aulas
router.post('/aulas', aulaController.createAula);
router.get('/aulas', aulaController.listAllAulas);
router.get('/aulas/:id', aulaController.findAulaById);
router.put('/aulas/:id', aulaController.updateAulaById);
router.delete('/aulas/:id', aulaController.deleteAulaById);


module.exports = router;