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
    let posts = []

    switch(option.format) {
        case 'all': fill(posts, ['html', 'md'], option); break
        case 'md': fill(posts, ['md'], option); break
        case 'html': fill(posts, ['html'], option); break
    }

    console.log(posts)
    console.log('===============END===============')
    return posts
}