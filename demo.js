// run this demo using node.js https://nodejs.org/
const log = require('./index.js')
log(
	'\n'+
	'The package log-with-colors adds some new logging functions using\n'+
	'process.stdout and colors.js:'
)
log.error('log.error() should be cyan')
log.info('log.info() should be blue')
log.warn('log.warn() should be yellow')
log.success('log.success() should be green')
log('log() is a console.log look-alike')
log(
	'\nIt inherits the String.prototype colors.js extention, allowing you to compose:\n'+
	'\'Hello World!\''.blue+'.blue\n'+
	'\'Hello World!\''.magenta+'.magenta\n'+
	'\'Hello World!\''.bold +'.bold\n'+
	'\'Hello World!\''.inverse+'.inverse\n'+
	'\'Hello World!\''.grey.inverse+'.grey.inverse\n'+
	'\n'+
	'To know more about log-with-colors and colors.js, access:\n'+
	'https://github.com/al-lopes/log-with-colors\n'.magenta+
	'https://github.com/Marak/colors.js\n'.magenta+
	'To know more about console specifications, access:\n'+
	'https://console.spec.whatwg.org\n'.magenta+
	'Thank you very much for your download!\n'.green
)
