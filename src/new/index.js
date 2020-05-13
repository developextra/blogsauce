const fs = require('fs')
const path = require('path')
const Walk = require('../../lib/Walk')
const Marker = require('../../lib/Marker')
const YAML = require('js-yaml')
const smart = require('./smart')

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
                    case '.markdown': postData = `# ${key}`; break
                    case '.html':  postData = `<h1>${key}</h1>`; break
                    default: this.error('Valid Post Type Required::new()')
                }
                switch(this.config.prefer.snippet) {
                    case '.yml': 
                    case '.yaml': snippetData = YAML.safeDump(smart(this, key)); break
                    case '.json': snippetData = JSON.stringify(smart(this, key), null, 2); break
                    case '.js': snippetData = ['module.exports = ', smart(this, key)]; break
                    default: this.error('Valid Snippet Type Required::new()')
                }
            }

            if(!fs.existsSync(path.resolve(this.config.entry))) fs.mkdirSync(path.resolve(this.config.entry))
            if(!fs.existsSync(path.resolve(this.config.snippet.entry))) fs.mkdirSync(path.resolve(this.config.snippet.entry))
                
            fs.writeFileSync(path.resolve(this.config.entry, key+this.config.prefer.post), postData)
            fs.writeFileSync(path.resolve(this.config.snippet.entry, key+this.config.prefer.snippet), snippetData)
        }
    }
}