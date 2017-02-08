// run this demo using node.js https://nodejs.org/
const log = require('./index.js')
log(
	'\n'+
	'The package log-with-colors adds some new logging functions using\n'+
	'process.stdout and chalk'
)
log.gray('log.gray() should be gray')
log.blue('log.blue() should be blue')
log.cyan('log.cyan() should be cyan')
log.green('log.green() should be green')
log.yellow('log.yellow() should be yellow')
log.red('log.red() should be red')
log.magenta('log.magenta() should be magenta')
log('log() is a console.log look-alike')
log.error('log.error() prints with process.stderr')
log.success('log.success() is equal to log.green()')
log.warn('log.warn() is equal to log.yellow()')
log.info('log.info() is equal to log.cyan()')
log('\nTo know more about log-with-colors, chalk.js and console logging, access:')
log.magenta('https://github.com/al-lopes/log-with-colors')
log.magenta('https://github.com/chalk/chalk')
log.magenta('https://console.spec.whatwg.org')
log.green('Thank you very much for your download!\n')
