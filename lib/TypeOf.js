module.exports = function(obj) {
    return {}.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase()
}