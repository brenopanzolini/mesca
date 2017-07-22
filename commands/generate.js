const fs = require('fs-extra')
    , path = require('path')
    , util = require('../utils/util')
    , pwd = process.cwd();

const generateApi = (name) => {
  
}

// Export command
module.exports = (vorpal) => {
  vorpal
    .command('generate [what] [name]', 'Generate templates.')
    .alias('g')
    .validate(function (args) {
      if(!fs.existsSync(util.templatesFolder)) {
        this.log("Run 'mesca init' to use scaffolding");
        return false;
      } else if(args.what === undefined) {
        this.log("Need to inform [what] wants to generate");
        return false;
      } else if(args.name == undefined) {
        this.log("Need to inform the [name]");
        return false;
      }

      return true;
    })
    .action(function (args, callback) {
      swith(args.what.toLowerCase()) {
        case 'api':
          generateApi(args.name);
          break
      }

      callback();
    });
}
