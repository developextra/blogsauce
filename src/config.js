const path = require('path')

// config
module.exports.config = {
    entry: require(path.resolve('package.json')).main,
    format: { posts: 'markdown', snippets: 'yaml' },
    title: require(path.resolve('package.json')).name,
    description: require(path.resolve('package.json')).description,
    version: require(path.resolve('package.json')).version,
    keywords: require(path.resolve('package.json')).keywords,
    author: {
        name: require(path.resolve('package.json')).author,
        bio: '',
        links: [
            { email: true, link: '' },
            { link: '', icon: '' },
            { link: '', icon: '' },
            { link: '', icon: '' },
            { link: '', icon: '' }
        ]
    },
    snippet: {
        entry: require(path.resolve('package.json')).main+'/snippets',
        options: {
            title: require(path.resolve('package.json')).title,
            description: require(path.resolve('package.json')).description,
            keywords: require(path.resolve('package.json')).keywords,
            readtime: '5 min',
            publish: true,
            output: ''
        }
    },
    markedJs: {},
    sanitizeHtml: {},
    error: {
        log: true,
        level: 0,
        prefix: require(path.resolve('package.json')).name+':error',
        style: {
            color: {
                all: false,
                prefix: 'red',
                message: false
            },
            bold: {
                all: false,
                prefix: false,
                message: true
            }
        },
        message: {
            'Valid Message Required::error': 'error() expects a valid error.message',
            'Valid Options Required::setConfig': 'setConfig() expects an object but got undefined',
            'TypeError: chalk[style.all] is not a function': 'error.style.color.all expects a valid "chalk" color || false',
            'TypeError: chalk[style.prefix] is not a function': 'error.style.color.prefix expects a valid "chalk" color || false',
            'TypeError: chalk[style.message] is not a function': 'error.style.color.message expects a valid "chalk" color || false'
        }
    }
}

// setConfig()
module.exports.set = function(options) {
    if(!options) this.error('Valid Options Required::setConfig')
    else this.config = require('../lib/Merge')(this.config, options)
}