import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import ejs from 'ejs';
import { findYamlItems, getCategoriesAndData } from './utils/search';
import { Config } from './interfaces/config';
import { Document } from './interfaces/document';

export function init(
  output: string = 'index.html',
  sourceDirectory: string = 'src'
) {
  const defaultConfig = yaml.stringify({
    makecat: {
      template: 'default',
      output,
      sourceDirectory,
      document: {
        title: 'Makecat Document',
        lang: 'en'
      }
    }
  } as Config);

  const exampleYaml = yaml.stringify({
    data: {
      title: 'Example Item',
      description: 'This is an example item.'
    }
  } as Document);

  const exampleCategory = path.join(sourceDirectory, 'example');

  fs.writeFileSync('makecat.yml', defaultConfig);
  fs.mkdirSync(exampleCategory, { recursive: true });
  fs.writeFileSync(path.join(exampleCategory, 'example.yml'), exampleYaml);
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

  const yamlItems = await findYamlItems(config.sourceDirectory);
  const categories = yamlItems.map(getCategoriesAndData);

  const rendered = await ejs.renderFile(templatePath, {
    document: config.document,
    categories
  });

  fs.writeFileSync(config.output, rendered);
}
