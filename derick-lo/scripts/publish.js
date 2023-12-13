const path = require('path');
const fs = require('fs');
const { copyDir, cleanDir } = require('./utils/file');
const { getVersion, setVersionByType, setVersion } = require('./utils/version');

const distPath = path.resolve(__dirname, '../dist');
const pubPath = path.resolve(__dirname, '../../');
const versionPath = path.join(pubPath, './version');
const ROLLBACK_ARGS_REG = /^--rollback(=v_\d+.\d+.\d+)?$/;
const CMD_NAME_REG = /^--[A-Za-z]+=?/;
const TYPE_ARGS_REG = /^--type=(major|minor|patch)$/;
const EXCLUDE_REG = /^\..+|version|derick-lo/;

const backup = () => {
  copyDir({
    fromPath: pubPath,
    toPath: path.join(versionPath, `./v_${getVersion()}`),
    exclude: (file) => EXCLUDE_REG.test(file),
  });
};

const clean = () => {
  cleanDir({ filePath: pubPath, exclude: (file) => EXCLUDE_REG.test(file) });
};

const copyDist = () => {
  copyDir({ fromPath: distPath, toPath: pubPath });
};

/**
 * @param {'major' | 'minor' | 'patch'} [type]
 */
const publish = (type = 'patch') => {
  setVersionByType(type);
  backup();
  clean();
  copyDist();
};

const rollback = (version) => {
  clean();
  setVersionByType('patch');
  copyDir({
    fromPath: path.join(versionPath, `./${version}`),
    toPath: pubPath,
  });
};

const run = () => {
  /**
   * @property {boolean | string} --rollback
   * @property {'major' | 'minor' | 'patch'} --type
   */
  const cmd = {
    '--rollback': false,
    '--type': 'patch',
  };

  const args = process.argv.slice(2);

  // parse --rollback
  args
    .filter((v) => ROLLBACK_ARGS_REG.test(v))
    .forEach((v) => {
      let name = v.match(CMD_NAME_REG)?.[0];
      const value = v.replace(name, '');
      name = name?.replace?.('=', '');
      if (cmd[name] === false) {
        cmd[name] = true;
      }
      if (value) {
        cmd[name] = value;
      }
    });

  let rollbackName = cmd['--rollback'];
  if (rollbackName) {
    const files = fs.readdirSync(versionPath);

    if (!files.includes(`${rollbackName}`)) {
      rollbackName = files[files.length - 1];
    }
  }

  if (rollbackName) {
    rollback(rollbackName);
    return;
  }

  // parse --type
  args
    .filter((v) => TYPE_ARGS_REG.test(v))
    .forEach((v) => {
      let name = v.match(CMD_NAME_REG)?.[0];
      const value = v.replace(name, '');
      name = name?.replace?.('=', '');
      if (value) {
        cmd[name] = value;
      }
    });

  publish(cmd['--type']);
};

run();
