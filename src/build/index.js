// const fs = require('fs')
// const path = require('path')
const snippet = require('./snippet')
const post = require('./post')

module.exports = function() {
    // let ext = `.${this.config.format}`
    // let entry = path.resolve(this.config.entry)
    // let output = path.resolve(this.config.output)
    let posts = post(this.config, snippet(this.config.snippet))

    // switch(ext) {
    //     case '.html':
    //         console.log('handle html format')
    //         break
    //     case '.md':
    //         console.log('handle md format')
    //         break
    // }

    // console.log(snippets)
    console.log(posts)
    // console.log(output)
    // console.log(ext)
    // console.log(this.config.format)
}