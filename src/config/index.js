module.exports = {
    entry: 'posts',
    output: '.',
    format: 'all',
    owner: 'Michael Arakilian',
    snippet: {
        use: true,
        entry: 'posts/snippets',
        format: 'js',
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