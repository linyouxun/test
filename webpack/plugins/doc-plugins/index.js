function docPlugins() {
    console.log('docPlugins')
}

docPlugins.prototype.apply = function(compiler, callback) {
    compiler.plugin('emit', function(compilation, callback) {
        var filelist = 'In this build \r\n';
        for (const filename in compilation.assets) {
            if (compilation.assets.hasOwnProperty(filename)) {
                var source = compilation.assets[filename].source();
                compilation.assets[filename].source = function() {
                    return source.replace(/(\/\/.*)|(\/\*[\s\S]*?\*\/)/g, '')
                }
                const element = filename;
                filelist += element + '\n';
            }
        }
        compilation.assets['filelist.md'] = {
            source: function() {
                return filelist;
            },
            size: function() {
                return filelist.length;
            }
        }
        callback();
    })
}

module.exports = docPlugins