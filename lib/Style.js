const chalk = require('chalk')

function color(style, message) {
    if(style.all !== false) {
        message.prefix = chalk[style.all](message.prefix)
        message.message = chalk[style.all](message.message)
    }
    else {
        if(style.prefix !== false) message.prefix = chalk[style.prefix](message.prefix)
        if(style.message !== false) message.message = chalk[style.message](message.message)
    }
}

function bold(style, message) {
    if(style.all !== false) {
        message.prefix = chalk.bold(message.prefix)
        message.message = chalk.bold(message.message)
    }
    else {
        if(style.prefix !== false) message.prefix = chalk.bold(message.prefix)
        if(style.message !== false) message.message = chalk.bold(message.message)
    }
}

module.exports = function(task, message) {
    if(task.config.error.style.none === true) message.resolved = `${message.prefix} ${message.message}`
    else {
        try {
            color(task.config.error.style.color, message)
            bold(task.config.error.style.bold, message)
            message.resolved = `${message.prefix} ${message.message}`
        }
        catch(err) {
            message.resolved = message.resolved = `${message.prefix} ${task.config.error.message[err.toString()]}`
        }
    }

    return message.resolved
}