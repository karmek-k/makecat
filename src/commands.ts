import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import ejs from 'ejs';

export function init(
  output: string = 'index.html',
  sourceDirectory: string = 'src'
) {
  const defaultConfig = yaml.stringify({
    makecat: {
      template: 'default',
      output,
      document: {
        title: 'Makecat Document',
        lang: 'en'
      }
    }
  });

  fs.writeFileSync('makecat.yml', defaultConfig);
  fs.mkdirSync(sourceDirectory);
}

export async function build(configPath: string = 'makecat.yml') {
  const configFile = fs.readFileSync(configPath, 'utf-8');
  const config = yaml.parse(configFile).makecat;

  const templatePath = path.join(
    __dirname,
    '..',
    'templates',
    `${config.template}.ejs`
  );

  const rendered = await ejs.renderFile(templatePath, {
    document: config.document,
    categories: []
  });

  fs.writeFileSync(config.output, rendered);
}
