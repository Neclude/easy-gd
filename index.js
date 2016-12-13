var gd = module.exports = Object.create(require('node-gd')),
    _ = require('underscore')

_.extend(gd,
         require('./lib/errors.js').classes,
         require('./lib/opener.js'),
         require('./lib/transform.js'),
         require('./lib/formats.js').getImageFormat
)

_.extend(gd.Image.prototype,
         require('./lib/image.js')
)
