const colors = require('colors')
const util = require('util')
const print = (logLevel, message) => {
	switch(logLevel) {
		case 'error': {
			process.stderr.write(colors.red(message) + '\n');
			break
		}
		case 'log': {
    	process.stdout.write(message + '\n');
			break
		}
		case 'info': {
    	process.stdout.write(colors.cyan(message) + '\n');
			break
		}
		case 'warn': {
    	process.stdout.write(colors.yellow(message) + '\n');
			break
		}
		case 'success': {
    	process.stdout.write(colors.green(message) + '\n');
			break
		}
	}
	return undefined
}
const log =		(...args) => print('log', util.format(...args))
log.error =		(...args) => print('error', util.format(...args))
log.info =		(...args) => print('info', util.format(...args))
log.warn =		(...args) => print('warn', util.format(...args))
log.success =	(...args) => print('success', util.format(...args))
module.exports = log
