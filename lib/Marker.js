module.exports = (function() {
    let mark
    require('os').platform() === 'win32' ? mark = '\\' : mark = '/'
    return mark
})()