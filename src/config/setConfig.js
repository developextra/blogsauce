module.exports = function(options) {
    if(!options) return undefined
    this.config.snippets.config = require('../../lib/Merge')(this.config.snippets.config, options)
}