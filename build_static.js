var fse = require('fs-extra')

// Copy static folder for app.
fse.copy('./source/static', './build/static', {clobber: true})
