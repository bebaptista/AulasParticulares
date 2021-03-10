const router = require('express-promise-router')();
const dashboardController = require('../controllers/dashboard.controller');

// ==> Definindo as rotas do - 'dashboard':

router.get('/dashboard/reclamacoes', dashboardController.recuperaReclamacoes);
router.get('/dashboard/usuarios', dashboardController.recuperaUsuarios);
router.get('/dashboard/usuariosativos', dashboardController.recuperaUsuariosAtivos);
router.get('/dashboard/confirmacoes', dashboardController.recuperaConfirmacoes);
router.get('/dashboard/taxaprofessoraluno', dashboardController.recuperaTaxaProfessorAluno);
router.get('/dashboard/taxaprofessormatematica', dashboardController.recuperaTaxaProfessorMatematica);
router.get('/dashboard/taxaprofessorportugues', dashboardController.recuperaTaxaProfessorPortugues);
router.get('/dashboard/taxaprofessorfisica', dashboardController.recuperaTaxaProfessorFisica);
router.get('/dashboard/taxaprofessorquimica', dashboardController.recuperaTaxaProfessorQuimica);
router.get('/dashboard/taxaprofessorbiologia', dashboardController.recuperaTaxaProfessorBiologia);
router.get('/dashboard/taxaprofessorfilosofia', dashboardController.recuperaTaxaProfessorFilosofia);
router.get('/dashboard/taxaprofessorsociologia', dashboardController.recuperaTaxaProfessorSociologia);
router.get('/dashboard/taxaprofessorartes', dashboardController.recuperaTaxaProfessorArtes);
router.get('/dashboard/taxaprofessorespanhol', dashboardController.recuperaTaxaProfessorEspanhol);
router.get('/dashboard/taxaprofessorredacao', dashboardController.recuperaTaxaProfessorRedacao);
router.get('/dashboard/taxaprofessorliteratura', dashboardController.recuperaTaxaProfessorLiteratura);
router.get('/dashboard/taxaprofessorciencias', dashboardController.recuperaTaxaProfessorCiencias);
router.get('/dashboard/taxaprofessorgeografia', dashboardController.recuperaTaxaProfessorGeografia);
router.get('/dashboard/taxaprofessorhistoria', dashboardController.recuperaTaxaProfessorHistoria);
router.get('/dashboard/taxaprofessoringles', dashboardController.recuperaTaxaProfessorIngles);
router.get('/dashboard/taxaprofessormateria', dashboardController.recuperaTaxaProfessorMateria);

module.exports = router;