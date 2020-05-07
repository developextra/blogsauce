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
            let resolvedAll = []
            if(option.use === true) {
                walk(option.entry, function(snippetPath) {
                    if(snippetPath.endsWith(option.format)) resolvedAll.push(snippetPath)
                })
            }
            snippets = resolvedAll
            break
        case 'array':
            let resolvedSpecific = []
            fill(option.entry, snippets)
            snippets.forEach(snippetPath => {
                option.use.forEach(snippet => {
                    let snippetName = snippetPath.split(marker)[snippetPath.split(marker).length - 1].split(`.${option.format}`)
                    if(snippetName.length > 1 && snippet === snippetName[0]) resolvedSpecific.push(snippetPath)
                })
            })
            snippets = resolvedSpecific
            break
    }

    return snippets
}