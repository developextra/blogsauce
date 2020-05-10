const path = require('path')
const Walk = require('../../../lib/Walk')
const Marker = require('../../../lib/Marker')
const Main = require('./main')

module.exports = function(_this, post) {
    let postmatch = false
    let snippetmatch = false

    Walk(path.resolve(_this.config.entry), function(_path) {
        if(_path.split(Marker)[_path.split(Marker).length - 1].startsWith(post)) postmatch = _path
    })

    if(!postmatch) _this.error('Valid Target Required::build(invalid)')
    else {
        Walk(path.resolve(_this.config.snippet.entry), function(_path) {
            if(_path.split(Marker)[_path.split(Marker).length - 1].startsWith(post)) snippetmatch = _path
        })
        if(!snippetmatch) _this.error('Valid Target Required::build(invalid_snippet)')
        else Main(_this, { key: post, post: postmatch, snippet: snippetmatch })
    }
}