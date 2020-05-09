const post = require('./post')
const snippet = require('./snippet')

module.exports = function(target='all') {
    if(!target) return this.error('Valid Target Required::build')
    switch(target) {
        case 'all':
            console.log('building all')
            break
        case 'index':
            console.log('building index')
            break
        case 'author':
            console.log('building author')
            break
        default: this.error('Valid Target Required::build(invalid)')
    }
}