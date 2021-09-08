import fs from 'fs';
import path from 'path';
import yaml from 'yaml';

export function build() {}

export function init(directory: string = '.') {
  const defaultConfig = yaml.stringify({
    makecat: {
      template: 'default'
    }
  });

  fs.writeFileSync(path.join(directory, 'makecat.yml'), defaultConfig);
}
