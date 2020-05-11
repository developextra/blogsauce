const blog = require('../src')

blog.setConfig({
    entry: 'posts',
    prefer: {
        post: '.markdown',
        snippet: '.json',
        boilerplate: true,
        smart: false
    },
    snippet: {
        entry: 'snippets'
    }
})

blog.new('Tesdsdst')