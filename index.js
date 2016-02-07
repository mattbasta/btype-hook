var hook = require('node-hook');
var btype = require('btype');


hook.hook('.bt', function(source, filename) {
    return 'module.exports = ' + btype(source, filename, 'js');
});
