module.exports = function(_this, key) {
    let mod = _this.config.snippet.config
    
    if(_this.config.prefer.smart) {
        let resolvedDate
        let today = new Date()
        let format = _this.config.prefer.date.format

        switch(format) {
            case '/': resolvedDate = `${_this.config.prefer.date.months[today.getMonth()]}/${today.getDate().toString()}/${today.getFullYear().toString()}`; break
            case ',': resolvedDate = `${_this.config.prefer.date.months[today.getMonth()]} ${today.getDate().toString()}, ${today.getFullYear().toString()}`; break
            default: _this.error('Valid Date Format Required')
        }

        mod.title = key
        mod.description = key+' description...'
        mod.date = resolvedDate
    }

    return mod
}