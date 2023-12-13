const path = require('path');
const dotenv = require('dotenv');

module.exports = () => {
  try {
    dotenv.config({
      path: path.resolve(__dirname, '../.env'),
    });
    const envPathName = path.resolve(
      __dirname,
      `../.${process.argv
        .slice(2)
        .reverse()
        .find((el) => /^--env=.+$/.test(el))
        .replace('--', '')
        .replace('=', '.')}`
    );
    dotenv.config({
      path: envPathName,
    });
  } catch (e) {
    console.error(e);
  }

  const record = {};
  Object.keys(process.env).forEach((key) => {
    if (/^APP_/.test(key)) {
      record[key] = process.env[key];
    }
  });

  return record;
};
