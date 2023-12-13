const path = require("path");
const fs = require("fs");

/**
 * @param {Object} options
 * @param {string} options.fromPath
 * @param {string} options.toPath
 * @param {boolean} [options.createIfNotExists = true]
 * @param {(fileName:string)=>boolean} [options.exclude]
 */
const copyDir = (options) => {
  const { fromPath, toPath, exclude, createIfNotExists = true } = options;

  if (!fs.existsSync(fromPath)) {
    throw new Error("options.fromPath not existed!");
  }

  if (!fs.existsSync(toPath)) {
    if (createIfNotExists) {
      fs.mkdirSync(toPath, { recursive: true });
      console.log(
        "\x1b[32m%s\x1b[0m",
        `path ${toPath} not existed, created success.`
      );
    } else {
      throw new Error(`path ${toPath} not existed!`);
    }
  }

  const files = fs.readdirSync(fromPath);

  files.forEach((file) => {
    if (exclude?.(file)) {
      console.log(`\x1b[34m${file}\x1b[0m \x1b[90m copy excluded.\x1b[0m`);
      return;
    }

    const sourcePath = path.join(fromPath, file);
    const targetPath = path.join(toPath, file);

    if (fs.statSync(sourcePath).isDirectory()) {
      copyDir({ fromPath: sourcePath, toPath: targetPath });
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
};

/**
 * @param {string} filePath
 */
const delDir = (filePath) => {
  if (fs.existsSync(filePath)) {
    fs.readdirSync(filePath).forEach((file) => {
      const curPath = `${filePath}/${file}`;

      if (fs.lstatSync(curPath).isDirectory()) {
        delDir(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });

    fs.rmdirSync(filePath);
  }
};

/**
 * @param {Object} options
 * @param {string} options.filePath
 * @param {(fileName:string)=>boolean} [options.exclude]
 */
const cleanDir = (options) => {
  const { filePath, exclude } = options;

  if (!fs.existsSync(filePath)) {
    return;
  }

  const files = fs.readdirSync(filePath);

  files.forEach((file) => {
    if (exclude(file)) {
      console.log(`\x1b[34m${file}\x1b[0m \x1b[90m clean excluded.\x1b[0m`);
      return;
    }

    const fullPath = path.join(filePath, file);

    if (fs.statSync(fullPath).isDirectory()) {
      delDir(fullPath);
    } else {
      fs.unlinkSync(fullPath);
    }
  });
};

module.exports = {
  copyDir,
  cleanDir,
  delDir,
};
