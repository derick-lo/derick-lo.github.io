const { exec } = require('child_process');
const path = require('path');

/**
 * @description exec command in dir
 * @param {string} command
 * @param {string} dir path relative to derick-lo
 */
const runCommand = (command, dir = './') => {
  if (!command) {
    return;
  }

  const fullPath = path.resolve(__dirname, path.join(dir, '../../'));

  console.log(
    '\x1b[1m%s\x1b[1m \x1b[30m%s\x1b[0m \x1b[33m%s\x1b[0m \x1b[33m%s\x1b[0m',
    'exec ',
    fullPath,
    '>',
    command
  );
  exec(command, { cwd: fullPath }, (error, stdout, stderr) => {
    if (error) {
      console.error(error);
      return;
    }
    if (stderr) {
      console.error(stderr);
      return;
    }
    if (stdout) {
      console.log('\x1b[36m%s\x1b[0m', stdout);
    }
  });
};

module.exports = {
  runCommand,
};
