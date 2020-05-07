module.exports = {
    entry: 'posts',
    output: {
        path: '.',
        sanitize: true
    },
    logErrors: false,
    format: 'all',
    owner: 'Michael Arakilian',
    markdown: {},
    sanitizeHtml: {},
    snippet: {
        use: true,
        entry: 'posts/snippets',
        format: 'all',
        defaultSeo: true,
        options: {
            title: '',
            description: '',
            tags: [],
            readtime: '',
            features: [],
            seo: {
                author: '',
                title: '',
                description: '',
                keywords: []
            }
        }
    }
}