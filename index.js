var glob = require("glob-stream")
var path = require("path")

module.exports = function(angel, next){
  var scripts = []
  glob(path.join(process.cwd(), "scripts", "**/*.js"))
    .on('data', function(file){
      scripts.push(file.path)
    })
    .on('end', function(){
      angel.scripts.loadScripts(scripts, next)
    })
}
