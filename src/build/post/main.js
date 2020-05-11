const fs = require('fs')
const yaml = require('js-yaml')
const markdown = require('marked')
const Marker = require('../../../lib/Marker')
const allowedMarkup = ['.html', '.md', '.markdown']
const allowedSnippet = ['.js', '.yml', '.yaml', '.json']
const writePost = require('./writePost')

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
        let raw = {
            post: null,
            snippet: null
        }

        if(post.post.endsWith('.html')) raw.post = fs.readFileSync(post.post, 'utf8')
        else {
            markdown.setOptions(_this.config.markedJs)
            raw.post = markdown(fs.readFileSync(post.post, 'utf8'), _this.config.markedJs)
        }

        if(post.snippet.endsWith('.yml') || post.snippet.endsWith('.yaml')) raw.snippet = yaml.safeLoad(fs.readFileSync(post.snippet, 'utf8'))
        else raw.snippet = require(post.snippet)

        writePost(_this, raw)
    }
}