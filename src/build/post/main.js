const Marker = require('../../../lib/Marker')
const allowedMarkup = ['.html', '.md', '.markdown']
const allowedSnippet = ['.js', '.yml', '.yaml', '.json']

module.exports = function(_this, post) {
    let markupPass = false
    let snippetPass = false
    
    let postFile = post.post.split(Marker)[post.post.split(Marker).length - 1]
    let snippetFile = post.snippet.split(Marker)[post.snippet.split(Marker).length - 1]

    allowedMarkup.forEach(function(ext) { if(postFile.endsWith(ext)) markupPass = true })

    if(!markupPass) _this.error('Valid Post Extension Required')
    else allowedSnippet.forEach(function(ext) { if(snippetFile.endsWith(ext)) snippetPass = true })

    if(!snippetPass) _this.error('Valid Snippet Extension Required')
    else {
        console.log('build the post')
        console.log(_this.config)
        console.log(post)
    }

    return 0
}