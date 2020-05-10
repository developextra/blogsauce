module.exports = (function() {
    if(require('os').platform() === 'win32') return '\\'
    else return '/'
})()