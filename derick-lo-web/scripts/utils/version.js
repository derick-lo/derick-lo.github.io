const fs = require("fs");
const path = require("path");

const fileName = path.resolve(__dirname, "../../package.json");
const encoding = "utf-8";

/**
 * @returns {string}
 */
const getVersion = () => {
  const packageJson = fs.readFileSync(fileName, { encoding });
  const data = JSON.parse(packageJson);
  return data.version;
};

/**
 * @param {'major' | 'minor' | 'patch'} [type="patch"]
 */
const generateVersion = (type = "patch") => {
  const lastValue = getVersion();
  const arr = lastValue.split(".");
  if (type === "major") {
    return `${parseInt(arr[0]) + 1}.${arr[1]}.${arr[2]}`;
  }

  if (type === "minor") {
    return `${arr[0]}.${parseInt(arr[1]) + 1}.${arr[2]}`;
  }

  if (type === "patch") {
    return `${arr[0]}.${arr[1]}.${parseInt(arr[2]) + 1}`;
  }

  throw new Error("type must be 'major' | 'minor' | 'patch'.");
};

/**
 * @param {string} version
 */
const setVersion = (version) => {
  const packageJson = fs.readFileSync(fileName, { encoding });
  const data = JSON.parse(packageJson);
  data.version = version;
  const updatedData = JSON.stringify(data, null, 2);
  fs.writeFileSync(fileName, updatedData, { encoding });
};

/**
 * @param {'major' | 'minor' | 'patch'} [type="patch"]
 */
const setVersionByType = (type = "patch") => {
  setVersion(generateVersion(type));
};

module.exports = {
  getVersion,
  generateVersion,
  setVersion,
  setVersionByType,
};
