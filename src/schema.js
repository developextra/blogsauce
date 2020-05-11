const joi = require('@hapi/joi')

module.exports = joi.object({
    publish: joi.boolean().required()
})