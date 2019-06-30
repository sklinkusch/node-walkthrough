const { showHelp } = require('./messaging');
const { prepareString } = require('./formatting');

const args = process.argv.slice(2);

if(args.includes('--help')){
  showHelp();
}

const continent = prepareString(args[0]);
const city = prepareString(args[1]);

console.log(`${continent}/${city}`);
