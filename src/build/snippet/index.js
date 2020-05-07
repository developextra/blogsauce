const typeOf = require('../../../lib/TypeOf')
const walk = require('../../../lib/Walk')
const marker = require('../../../lib/Marker')
const fill = function(snippets, formats, option) {
    walk(require('path').resolve(option.entry), function(snippetPath) {
        formats.forEach(function(format) {
            if(snippetPath.endsWith(format)) snippets.push(snippetPath)
        })
    })
}

module.exports = function(option) {
    let snippets = []
    
    switch(typeOf(option.use)) {
        case 'boolean':
            resolvedAll = []
            if(option.use === true) {
                switch(option.format) {
                    case 'all': fill(resolvedAll, ['js', 'yml', 'yaml', 'json'], option); break
                    case 'js': fill(resolvedAll, ['js'], option); break
                    case 'yml': 
                    case 'yaml': fill(resolvedAll, ['yml', 'yaml'], option); break
                    case 'json': fill(resolvedAll, ['json'], option); break
                }
            }
            else resolvedAll = false
            snippets = resolvedAll
            delete resolvedAll
            break
        case 'array':
            tmp = []
            resolvedSpecific = []
            switch(option.format) {
                case 'all': fill(tmp, ['js', 'yml', 'yaml', 'json'], option); break
                case 'js': fill(tmp, ['js'], option); break
                case 'yml': 
                case 'yaml': fill(tmp, ['yml', 'yaml'], option); break
                case 'json': fill(tmp, ['json'], option); break
            }
            option.use.forEach(function(input) {
                tmp.forEach(function(snippetPath) {
                    snippetFilename = snippetPath.split(marker)[snippetPath.split(marker).length - 1]
                    if(snippetFilename.startsWith(input)) resolvedSpecific.push(snippetPath); 
                })
            }); delete tmp; delete snippetFilename
            snippets = resolvedSpecific
            delete resolvedSpecific
            break
    }

    return snippets
}