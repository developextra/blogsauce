const fs = require('fs')
const path = require('path')
const Walk = require('../../lib/Walk')
const Marker = require('../../lib/Marker')

module.exports = function(key) {
    if(!key) return this.error('Valid Key Required::new')
    else {

        let postExists = false
        let snippetExists = false

        Walk(path.resolve(this.config.entry), function(fpath) { if(fpath.split(Marker)[fpath.split(Marker).length - 1].startsWith(key)) postExists = true })
        Walk(path.resolve(this.config.snippet.entry), function(fpath) { if(fpath.split(Marker)[fpath.split(Marker).length - 1].startsWith(key)) snippetExists = true })

        if(postExists && snippetExists) this.error('Valid Key Required::new(exists)')
        else if(postExists && !snippetExists) this.error('Valid Key Required::new(exists_post)')
        else if(!postExists && snippetExists) this.error('Valid Key Required::new(exists_snippet)')
        else {
            let postData = ''
            let snippetData = ''

            if(this.config.prefer.boilerplate) {
                switch(this.config.prefer.post) {
                    case '.md':
                    case '.markdown': postData = '# Hello World'; break
                    case '.html':  postData = '<h1>Hello World</h1>'; break
                    default: this.error('Valid Post Type Required::new()')
                }
                switch(this.config.prefer.snippet) {
                    case '.js': 
                        snippetData = 'js'
                        break
                    case '.json': 
                        snippetData = 'json'
                        break
                    case '.yml': 
                    case '.yaml': 
                        snippetData = 'yaml'
                        break
                    default: this.error('Valid Snippet Type Required::new()')
                }
            }

            console.log(postData)
            console.log(snippetData)
        }

    }
}