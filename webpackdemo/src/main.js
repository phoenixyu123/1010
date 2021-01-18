const common = require('./common')
const utils = require('./utils')
require('./style.css')//css不能省略后缀

common.info('hello common'+utils.add(100,200))

