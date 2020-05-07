module.exports = {
    config: {
        entry: 'posts',
        output: '.',
        snippets: 'posts/snippets',
        format: 'md'
    },
    setConfig: require('./setConfig'),
    init: require('./init'),
    build: function() {
        console.log('building blog')
    },
    run: function() {
        console.log('running blog server')
    },
    publish: function(file='.') {
        console.log('publishing blog')
        // update package.json version
        // git add .
        // git commit -m "Published [version]"
        // git push
    }
}