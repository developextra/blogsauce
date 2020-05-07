const blog = require('../src')


blog.setConfig({
    format: 'all',
    snippet: {
        use: true,
        format: 'all'
    }
})

blog.build()


// blog.init()
// blog.config.snippets.setConfig({test: true})
// console.log(blog.config.snippets)