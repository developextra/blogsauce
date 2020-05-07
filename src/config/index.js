module.exports = {
    entry: 'posts',
    output: '.',
    format: 'md',
    owner: 'Michael Arakilian',
    snippet: {
        use: true,
        entry: 'posts/snippets',
        format: 'js',
        defaultSeo: false,
        options: {
            title: '',
            description: '',
            tags: [],
            readtime: null,
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