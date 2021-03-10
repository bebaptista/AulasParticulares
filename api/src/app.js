const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const cors = require('cors');
app.use(express.static("src"));

// ==> Rotas da API:
const index = require('./routes/index');
const alunoRoute = require('./routes/aluno.routes');
const professorRoute = require('./routes/professor.routes');
const aulaRoute = require('./routes/aula.routes');
const dashboardRoute = require('./routes/dashboard.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api', alunoRoute);
app.use('/api', professorRoute);
app.use('/api', aulaRoute);
app.use('/api', dashboardRoute);

module.exports = app;

