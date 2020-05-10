const path = require('path')

// config
module.exports.config = {
    entry: require(path.resolve('package.json')).main,
    lang: 'en',
    title: require(path.resolve('package.json')).name,
    description: require(path.resolve('package.json')).description,
    version: require(path.resolve('package.json')).version,
    keywords: require(path.resolve('package.json')).keywords,
    author: {
        page: true,
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
            output: {
                path: '.',
                sanitize: true
            },
            title: require(path.resolve('package.json')).name,
            description: require(path.resolve('package.json')).description,
            keywords: require(path.resolve('package.json')).keywords,
            readtime: null,
            publish: false
        }
    },
    markedJs: {},
    sanitizeHtml: {},
    // font: { 
    //     primary: '', 
    //     secondary: ''
    // },
    // color: { 
    //     primary: '', 
    //     secondary: '' 
    // },
    // icon: {
    //     active: true,
    //     script: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js',
    //     stylesheet: null
    // },
    // highlight: {
    //     active: true,
    //     script: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.2/highlight.min.js',
    //     stylesheet: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.2/styles/tomorrow.min.css'
    // },
    // emoji: {
    //     active: true,
    //     script: '',
    //     stylesheet: null
    // },
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
            'Valid Target Required::build': 'build() expects a valid string but got undefined',
            'Valid Target Required::build(invalid)': 'build() expects: "all" (default) || [post] || "index" || "author"', 
            'Valid Target Required::build(invalid_snippet)': 'build(post) expects a corresponding snippet', 
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