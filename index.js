const chalk = require('chalk')
const util = require('util')
const print = (logLevel, message) => {
	switch(logLevel.type) {
		case 'error': {
    	process.stderr.write(chalk[logLevel.color](message) + '\n')
			break
		}
		case 'color': {
    	process.stdout.write(chalk[logLevel.color](message) + '\n')
			break
		}
		default: {
    	process.stdout.write(message + '\n')
			break
		}
	}
	return undefined
}
const log =		(...args) => print({type:'default'}, util.format(...args))
log.gray =		(...args) => print({type:'color', color:'gray'}, util.format(...args))
log.blue =		(...args) => print({type:'color', color:'blue'}, util.format(...args))
log.cyan =		(...args) => print({type:'color', color:'cyan'}, util.format(...args))
log.green =		(...args) => print({type:'color', color:'green'}, util.format(...args))
log.yellow =	(...args) => print({type:'color', color:'yellow'}, util.format(...args))
log.red =			(...args) => print({type:'color', color:'red'}, util.format(...args))
log.magenta =	(...args) => print({type:'color', color:'magenta'}, util.format(...args))


log.error =		(...args) => print({type:'error', color:'red'}, util.format(...args))
log.info =		log.cyan
log.warn =		log.yellow
log.success =	log.green
module.exports = log
