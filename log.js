const logSymbols = require('log-symbols');

function error(text) {
  let timestamp = new Date();
  console.log(logSymbols.error, '\x1b[41m', text,'\x1b[0m',
      logSymbols.info, '\x1b[36m', '' + timestamp, '\x1b[0m');
}

function success(text) {
  let timestamp = new Date();
  console.log(logSymbols.success, text,
   '\x1b[0m', logSymbols.info, '\x1b[36m', '' + timestamp, '\x1b[0m');
}

function warning(text) {
  let timestamp = new Date();
  console.log(logSymbols.warning, text,
              logSymbols.info, '\x1b[36m', '' + timestamp, '\x1b[0m');
}

module.exports = {
  error,
  success,
  warning,
}