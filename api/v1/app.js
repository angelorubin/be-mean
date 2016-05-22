'use strict';

require('./db/config');
const express = require('express')
	, compression = require('compression')
    , bodyParser = require('body-parser')
    , path = require('path')
    , router = express.Router()
    , ejs = require('ejs')
    , app = express();

app.use(require('cors')());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/**
 * Definindo variável de ambiente (por padrão é development)
 * Opções:
 * development
 * stage
 */
app.set('env', 'development');
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

/**
 * Route Home API
 */
app.get('/', (req, res) => {
	res.redirect('/api/v1/users');
});

/**
 * Route Users API
 */
const UsersAPI = require('./modules/users/routes');
app.use('/api/v1/users', UsersAPI);

/**
 * Catch 404 Handler Error
 */
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(app.get('port'), () => {
    console.log('Servidor Express escutando na porta ' + app.get('port'));
});