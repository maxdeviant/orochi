import * as cli from 'commander';

export const VERSION = require('../package.json').version;

cli
    .version(VERSION)
    .command('init [dir]', 'Initializes a new monolithic repository.')
    .parse(process.argv);
