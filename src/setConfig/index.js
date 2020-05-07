module.exports = function(options) {
    if(!options) return undefined
    this.config = require('../../lib/Merge')(this.config, options)
}