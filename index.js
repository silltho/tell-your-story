var connect = require('connect');
var serveStatic = require('serve-static');
var sassMiddleware = require('node-sass-middleware');


var srcPath = __dirname + '/sass';
var destPath = __dirname + '/public/css';

var app = connect();
app.use('/styles', sassMiddleware({
    /* Options */
    src: srcPath,
    dest: destPath,
    debug: true,
    outputStyle: 'expanded'
}));

//app.use(serveStatic(__dirname + 'index.html'));
app.use(serveStatic(__dirname + '/public'));
app.use(serveStatic(__dirname + '/test'));

app.listen(3333, function(){
    console.log('Server running on Port 3333...');
});
