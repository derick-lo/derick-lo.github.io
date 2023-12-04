const path = require("path");
const fs = require("fs");
const { copyDir, cleanDir } = require("./utils/file");
const { runCommand } = require("./utils/command");
const { getVersion, generateVersion } = require("./utils/version");

const distPath = path.resolve(__dirname, "../dist");
const pubPath = path.resolve(__dirname, "../../");
const versionPath = path.join(pubPath, "./version");
const ARGS_REG = /^--rollback(=v_\d+.\d+.\d+)?$/;
const CMD_REG = /^--[A-Za-z]+=?/;
const EXCLUDE_REG = /^\..+|version|derick-lo-web/;

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

const publish = () => {
  backup();
  clean();
  copyDist();
};

const rollback = (version) => {
  clean();
  copyDir({
    fromPath: path.join(versionPath, `./${version}`),
    toPath: pubPath,
  });
};

const run = () => {
  // parse cmd
  const cmd = {
    "--rollback": false,
  };
  process.argv
    .slice(2)
    .filter((v) => ARGS_REG.test(v))
    .forEach((v) => {
      let name = v.match(CMD_REG)?.[0];
      const value = v.replace(name, "");
      name = name?.replace?.("=", "");
      if (cmd[name] === false) {
        cmd[name] = true;
      }
      if (value) {
        cmd[name] = value;
      }
    });

  // parse rollback
  let rollbackName = cmd["--rollback"];
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

  publish();
};

run();
