const Style = require('../lib/Style')

module.exports = function(message) {
    if(this.config.error.log === true) {
        match = false
        err = message.toString()

        carePackage = {
            prefix: this.config.error.prefix,
            message: this.config.error.message['Valid Message Required::error']
        }
        
        for(const prop in this.config.error.message) {
            if(err === prop) match = this.config.error.message[prop]
        }

        if(match === false) console.log(Style(this, carePackage))
        else { carePackage.message = match; console.log(Style(this, carePackage)) }

        if(this.config.error.level === 0) process.exit()

        delete err
        delete match
        delete carePackage
        delete message
    }
    else if(this.config.error.level === 0) process.exit()
}