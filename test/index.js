const blog = require('../src')

blog.setConfig({
    entry: 'posts',
    output: '.',
    format: 'html'
})

blog.init()

// console.log(blog)