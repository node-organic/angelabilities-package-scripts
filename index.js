const glob = require("glob-stream")
const path = require("path")

module.exports = function(angel, next){
  const scripts = []
  glob(path.join(process.cwd(), "scripts", "**/*.js"))
    .on('data', function(file){
      scripts.push(file.path)
    })
    .on('end', async function(){
      await angel.loadScripts(scripts)
      next()
    })
}
