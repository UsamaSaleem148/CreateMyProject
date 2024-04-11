// To run the project run:
// npm link
// npm exec mkproj <name of the json file>

const fs = require('fs')

const makeMyProject = () => {
  if (!process.argv[2]) throw new Error('Please provide file name')
  const fileName = process.argv[2]
  const file = fs.readFileSync(`${fileName}`)
  const fileData = JSON.parse(file.toString())
  if (fileData.length > 0) {
    for (let i = 0; i < fileData.length; i++) {
      const element = fileData[i].folder
      if (!fs.existsSync(element.name)) {
        fs.mkdirSync(element.name)
        console.log(`${element.name} folder created.`)
      }

      if (element.files && element.files.length > 0) {
        for (let j = 0; j < element.files.length; j++) {
          let dir = `${element.name}/${element.files[j]}`
          fs.writeFile(dir, `${element.files[j]} works!`, function (err) {
            if (err) console.error(err)
            else console.log(`${element.files[j]} file created.`)
          })
        }
      }
    }
  }
}

exports.mkProject = makeMyProject
