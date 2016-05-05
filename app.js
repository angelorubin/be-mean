'use strict';

require('./db/config');
const express = require('express')
	,compression = require('compression')
    ,bodyParser = require('body-parser')
    ,path = require('path')
    ,router = express.Router()
    ,app = express();

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
app.set('view engine', 'html');
app.engine('html', require('jade').renderFile);

/**
 * Route Users API
 */
const UsersAPI = require('./modules/Users/routes');
app.use('/api/users', UsersAPI);

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