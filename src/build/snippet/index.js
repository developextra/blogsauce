const typeOf = require('../../../lib/TypeOf')
const walk = require('../../../lib/Walk')
const marker = require('../../../lib/Marker')
const fill = function(_option, _snippets) {
    walk(_option, function(path) { _snippets.push(path) })
}

module.exports = function(option) {
    let snippets = []
    
    switch(typeOf(option.use)) {
        case 'boolean':
            if(option.use === true) fill(option.entry, snippets)
            break
        case 'array':
            let resolved = []
            fill(option.entry, snippets)
            snippets.forEach(snippetPath => {
                option.use.forEach(snippet => {
                    let snippetName = snippetPath.split(marker)[snippetPath.split(marker).length - 1].split(`.${option.format}`)
                    if(snippetName.length > 1 && snippet === snippetName[0]) resolved.push(snippetPath)
                })
            })
            snippets = resolved
            break
    }

    return snippets
}