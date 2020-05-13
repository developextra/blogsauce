const blog = require('../src')

blog.setConfig({
    entry: 'posts',
    snippet: {
        entry: 'snippets'
    }
})

blog.build('Hello World')