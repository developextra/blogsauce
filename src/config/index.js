module.exports = {
    entry: 'posts',
    output: '.',
    format: 'md',
    owner: 'Michael Arakilian',
    snippets: {
        use: true,
        entry: 'posts/snippets',
        format: 'js',
        defaultSeo: false,
        config: require('./dsnippet'),
        setConfig: require('./setConfig')
    }
}