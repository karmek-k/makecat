import { Command } from 'commander';
import { init, build } from './commands';

const program = new Command();

program
  .command('init')
  .argument('[directory]')
  .description('Initializes a new config file')
  .action(init);

program.command('build').description('Builds the document').action(build);

export default program;
