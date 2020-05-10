function buildAll(_this) { return require('./all')(_this) }
function buildIndex(_this) { return require('./index')(_this) }
function buildAuthor(_this) { return require('./author')(_this) }
function buildPost(_this, post) { return require('./post')(_this, post) }

module.exports = function(target='all') {
    if(!target) return this.error('Valid Target Required::build')
    switch(target) {
        case 'all': buildAll(this); break
        case 'index': buildIndex(this); break
        case 'author': buildAuthor(this); break
        default: buildPost(this, target)
    }
}