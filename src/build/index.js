const fs = require('fs')
const path = require('path')
const snippet = require('./snippet')

module.exports = function() {
    let ext = `.${this.config.format}`
    let entry = path.resolve(this.config.entry)
    let output = path.resolve(this.config.output)
    let snippets = snippet(this.config.snippet)

    console.log(entry)
    console.log(output)
    console.log(ext)
    console.log(snippets)
    // console.log(this.config.snippet)
}