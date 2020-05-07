const fs = require('fs')
const path = require('path')

module.exports = function() {
    console.log('initializing blog')

    // Create `entry` directory
    if(!fs.existsSync(path.resolve(this.config.entry))) {
        fs.mkdirSync(path.resolve(this.config.entry))
    }
    // Create `output` directory
    if(!fs.existsSync(path.resolve(this.config.output))) {
        fs.mkdirSync(path.resolve(this.config.output))
    }
    // Create `snippets` directory
    if(!fs.existsSync(path.resolve(this.config.snippets))) {
        fs.mkdirSync(path.resolve(this.config.snippets))
    }
    // Create `index.html`
    if(!fs.existsSync(path.resolve(this.config.output, 'index.html'))) {
        // build a proper index
        let data = 'hello world'
        fs.writeFileSync(path.resolve(this.config.output, 'index.html'), data, { mode: 0o755 })
    }
    // Create `Hello World.md`
    switch(this.config.format) {
        case 'md':
            if(!fs.existsSync(path.resolve(this.config.entry, 'Hello World.md'))) {
                let data = fs.readFileSync(path.join(__dirname, '../../public/template/Hello World/.md'), { encoding:'utf8', flag:'r' })
                fs.writeFileSync(path.resolve(this.config.entry, 'Hello World.md'), data, { mode: 0o755 })
            }
            break;
        case 'html': 
            if(!fs.existsSync(path.resolve(this.config.entry, 'Hello World.html'))) {
                let data = fs.readFileSync(path.join(__dirname, '../../public/template/Hello World/.html'), { encoding:'utf8', flag:'r' })
                fs.writeFileSync(path.resolve(this.config.entry, 'Hello World.html'), data, { mode: 0o755 })
            }
            break;
    }
}