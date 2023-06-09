import debug from 'debug';
debug('comp229')

import http from 'http';
import bodyParser from 'body-parser';

//import the app
import app from './app.js';


const PORT = normalizePort(process.env.PORT || 3000);
app.set('port', PORT);

const server = http.createServer(app);

//const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

server.listen(PORT);
server.on('error', onError);
server.on('listening', onListening);


//Helper Functions
function normalizePort(val){
    let port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }

    if (port >= 0){
        return port;
    }
    return false;
}

function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }

    let bind = typeof PORT == 'string'
    ?'Pipe ' + PORT
    :'Port ' + PORT;

    switch (error.code){
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default: 
            throw error;
    }
}

function onListening(){
    let addr = server.address();
    let bind = 'pipe ' + addr;
    debug('Listening on ', bind);
    console.log('Listening started successfully');
}