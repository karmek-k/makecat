import { Command } from 'commander';

const program = new Command();

program
  .option('-t --template <filename>', 'template to use', 'default.ejs')
  .option('-c --config <filename>', 'config file', 'makecat.yml');

program
  .command('init')
  .description('Initializes a new config file')
  .action(() => console.log('init'));

program
  .command('build')
  .description('Builds the document')
  .action(() => console.log('build'));

program.parse(process.argv);

export const opts = program.opts();
