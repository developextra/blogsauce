const post = require('./post')
const snippet = require('./snippet')

module.exports = function() {
    let posts = post(this.config, snippet(this.config.snippet))

    console.log(posts)
}