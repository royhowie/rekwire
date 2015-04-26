var path = require("path");
var root = String(path.dirname(require.main.filename));

module.exports = function (localPath) {
    return require(path.join(root, String(localPath)));
}