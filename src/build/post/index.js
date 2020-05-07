const fs = require('fs')
const path = require('path')
const walk = require('../../../lib/Walk')
const marker = require('../../../lib/Marker')
const fill = function(posts, formats, option) {
    walk(path.resolve(option.entry), function(postPath) {
        formats.forEach(function(format) {
            if(postPath.endsWith(format)) posts.push(postPath)
        })
    })
}

module.exports = function(option, snippets) {
    tmpPosts = []
    let posts = []

    switch(option.format) {
        case 'all': fill(tmpPosts, ['.html', '.md'], option); break
        case 'md': fill(tmpPosts, ['.md'], option); break
        case 'html': fill(tmpPosts, ['.html'], option); break
    }

    tmpPosts.forEach(function(post) {
        postName = post.split(marker)[post.split(marker).length - 1]
        snippets.forEach(function(snippet) {
            snippetName = snippet.split(marker)[snippet.split(marker).length - 1]
            if(path.parse(postName).name === path.parse(snippetName).name) {
                resolved = { postPath: post, snippetPath: snippet }
                posts.push(resolved)
            }
        })
    })

    delete tmpPosts
    delete resolve    
    delete postName
    delete snippetName

    return posts
}