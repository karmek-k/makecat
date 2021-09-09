import glob from 'glob';
import fs from 'fs';
import path from 'path';
import yaml from 'yaml';

export function findYamlItems(directory: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    glob(`${directory}/*/*.y*ml`, (err, matches) => {
      if (err) {
        reject(err);
      }

      resolve(matches);
    });
  });
}

export function getCategoriesAndData(filePath: string) {
  const { dir } = path.parse(filePath);

  const content = fs.readFileSync(filePath, 'utf-8');
  const { data } = yaml.parse(content);

  return {
    title: dir,
    data: [data]
  };
}
