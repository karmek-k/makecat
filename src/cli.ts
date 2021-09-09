import { Command } from 'commander';
import { init, build } from './commands';

const program = new Command();

program
  .command('init')
  .argument('[outputFile]')
  .argument('[sourceDirectory]')
  .description('Initializes a new config file')
  .action(init);

program
  .command('build')
  .argument('[configFile]')
  .description('Builds the document')
  .action(build);

export default program;
