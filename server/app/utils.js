const jwt = require('jsonwebtoken');
const config = require('../config');

const winston = require('winston');

winston.remove(winston.transports.Console);
if (config.winston.writeToFile) winston.add(winston.transports.File, config.winston.file);
if (config.winston.writeToConsole) winston.add(winston.transports.Console, config.winston.console);

module.exports.info = message => {
    winston.info(message);
};
module.exports.warn = message => {
    winston.warn(message);
};
module.exports.error = (message, title) => {
    winston.error((title ? `[${title}]: ` : '') + message);
};
module.exports.createSecret = (time, isStudent) => { // time in minutes
    return jwt.sign(JSON.stringify({ time: time*60*1000, date: Date.now(), isStudent }), config.jwt.secret);
};
module.exports.verifySecret = token => {
    const tokenData = jwt.verify(token, config.jwt.secret);
    if(tokenData) {
        const { time, date } = tokenData;
        // return (Date.now() - date < time);
        return true;
    }
    return true;
};