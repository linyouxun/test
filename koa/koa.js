var http = require('http');

function Application() {
    this.context = {};
    this.context['res'] = null;
    this.meddleware = [];
}

var app = Application.prototype;

function response() {
    this.res.writeHead(200, {'Content-type': 'text/plain'})
    this.res.end(this.body);
}

app.use = function(fn) {
    this.do = fn;
}

app.callback = function() {
    var fn = this.do;
    var that = this;
    return function(req, res) {
        console.log(req.method, req.url);
        that.context.res = res;
        fn.call(that.context);
        response.call(that.context);
    }
}

app.listen = function() {
    var server = http.createServer(this.callback());
    return server.listen.apply(server, arguments);
}

var appObj = new Application();
appObj.use(function() {
    this.body = 'Hello World'
})
appObj.listen(8787);
