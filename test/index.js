const blog = require('../src')

blog.setConfig({
    entry: 'posts',
    snippet: {
        entry: 'snippets'
    }
})

console.log(blog.build('Hello World'))