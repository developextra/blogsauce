const post = require('./post')
const snippet = require('./snippet')

function buildAll(_this) {
    console.log('building all')
    console.log(_this)
}

function buildIndex(_this) {
    console.log('building index')
    console.log(_this)
}

function buildAuthor(_this) {
    console.log('building author')
    console.log(_this)
}

module.exports = function(target='all') {
    if(!target) return this.error('Valid Target Required::build')
    switch(target) {
        case 'all': buildAll(this); break
        case 'index': buildIndex(this); break
        case 'author': buildAuthor(this); break
        default: this.error('Valid Target Required::build(invalid)')
    }
}