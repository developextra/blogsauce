const blog = require('../src')


blog.setConfig({
    snippet: {
        use: ['Hello World']
    }
})

blog.build()


// blog.init()
// blog.config.snippets.setConfig({test: true})
// console.log(blog.config.snippets)