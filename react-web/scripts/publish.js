const path = require("path");
const fs = require("fs");
const { exec } = require("child_process");
const { copyDir, cleanDir } = require("./utils/file");
const { runCommand } = require("./utils/command");

// runCommand("git status", "../");
// runCommand("git add .", "../");

const distPath = path.resolve(__dirname, "../dist");
const pubPath = path.resolve(__dirname, "../../");
const versionPath = path.join(pubPath, "./version");
const ARGS_REG = /^--rollback(=v_\d{13})?$/;
const CMD_REG = /^--[A-Za-z]+=?/;
const EXCLUDE_REG = /^\..+|version|derick-lo-web/;

const backup = () => {
  copyDir({
    fromPath: pubPath,
    toPath: path.join(versionPath, `./v_${Date.now()}`),
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

const gitPush = () => {
  exec("git status", (error, stdout, stderr) => {
    if (error) {
      console.error(`执行 Git 命令时出错：${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Git 命令输出错误：${stderr}`);
      return;
    }
    console.log(`Git 命令输出：${stdout}`);
  });
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
    gitPush();
    return;
  }

  publish();
  gitPush;
};

run();
