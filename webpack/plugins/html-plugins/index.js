const _ = require('cheerio')
function htmlPlugins(options) {
    this.options = options || {};
}

htmlPlugins.prototype.apply = function(compiler, callback) {
    const _self = this;
    compiler.plugin('emit', function(compilation, callback) {
        var str = htmlTemplate();
        var path = (_self.options.path || '') + (_self.options.fileName || 'index.html')
        compilation.assets[path] = {
            source: function() {
                return str;
            },
            size: function() {
                return str.length;
            }
        }
        callback();
    })
}

const htmlTemplate = function() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title></title>
</head>
<body>
</body>
</html>`
}

module.exports = htmlPlugins