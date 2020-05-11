const blog = require('../src')

blog.setConfig({
    entry: 'posts',
    prefer: {
        post: '.html',
        snippet: '.json',
        boilerplate: true
    },
    snippet: {
        entry: 'snippets'
    }
})

console.log(blog.new('Tess'))