const path = require('path')
const joi = require('@hapi/joi')

// snippet schema
const schema = joi.object({
    publish: joi.boolean().required()
})

// config
module.exports.config = {
    entry: require(path.resolve('package.json')).main,
    lang: 'en',
    title: require(path.resolve('package.json')).name,
    description: require(path.resolve('package.json')).description,
    version: require(path.resolve('package.json')).version,
    keywords: require(path.resolve('package.json')).keywords,
    styles: [],
    scripts: [],
    prescripts: [],
    prefer: {
        post: '.md',
        snippet: '.yml',
        boilerplate: true
    },
    author: {
        component: true,
        name: require(path.resolve('package.json')).author,
        bio: '',
        links: [
            { email: true, link: '', text: '' },
            { phone: true, link: '', text: '' },
            { website: true, link: '', text: '' },
            { link: '', icon: '' },
            { link: '', icon: '' },
            { link: '', icon: '' },
            { link: '', icon: '' }
        ]
    },
    snippet: {
        entry: require(path.resolve('package.json')).main+'/snippets',
        config: {
            output: {
                path: '.',
                sanitize: true,
                sanitizeHtml: null
            },
            title: require(path.resolve('package.json')).name,
            description: require(path.resolve('package.json')).description,
            keywords: require(path.resolve('package.json')).keywords,
            readtime: null,
            publish: false
        },
        configSchema: schema
    },
    markedJs: {
        headerIds: false
    },
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
            'Valid Target Required::build': 'build() expects a valid string but got undefined',
            'Valid Target Required::build(invalid)': 'build() expects: "all" (default) || [post] || "index" || "author"', 
            'Valid Target Required::build(invalid_snippet)': 'build(post) expects a corresponding snippet', 
            'Valid Key Required::new': 'new() expects a string but got undefined', 
            'Valid Key Required::new(exists)': 'new(post) - [post, snippet] already exist',
            'Valid Key Required::new(exists_post)': 'new(post) - [post] already exist',
            'Valid Key Required::new(exists_snippet)': 'new(post) - [snippet] already exist',
            'Valid Post Type Required::new()': 'config.prefer.post should be either ".html" || ".md" || ".markdown"',
            'Valid Snippet Type Required::new()': 'config.prefer.snippet should be either ".js" || ".json" || ".yml" || ".yaml"',
            'Valid Post Extension Required': 'post file(s) need to be HTML or Markdown format',
            'Valid Snippet Extension Required': 'snippet file(s) need to be JavaScript, YAML, or JSON format',
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