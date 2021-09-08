import fs from 'fs';
import path from 'path';
import yaml from 'yaml';

export function build() {}

export function init(directory: string = '.') {
  const defaultConfig = yaml.stringify({
    makecat: {
      template: 'default',
      document: {
        title: 'Makecat Document',
        lang: 'en'
      }
    }
  });

  fs.writeFileSync(path.join(directory, 'makecat.yml'), defaultConfig);
}
