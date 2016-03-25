import * as cli from 'commander';
import * as path from 'path';
const NodeGit = require('nodegit');

cli
    .usage('[dir]')
    .parse(process.argv);

let directory = cli.args[0];

console.log(directory)

let repositoryPath = path.resolve(directory);
let isBare = 0;

NodeGit.Repository.init(repositoryPath, isBare).then((repository: any) => {
    console.log('done');
}).catch((err: any) => {
    console.log(err);
});
