const fs = require("fs");
const path = require("path")
const replaceThis = "harry";
const replaceWith = "Dhvanit";
const preview = false;
const folder = __dirname

try {
  fs.readdir(folder, (err, data) => {
    console.log(data);
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      let oldFile = path.join(folder, item)
      let newFile = path.join(folder, item.replaceAll(replaceThis, replaceWith));
      if (!preview) {
        fs.rename(oldFile, newFile, () => {
          console.log("rename success!");
        });
      } else {
        if ("data/" + item !== newFile) {
          console.log(oldFile + " will be renamed to " + newFile);
        }
      }
    }
  });
} catch (err) {
  console.log(err);
}
