import glob from 'glob';

export function findYamlItems(directory: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    glob(`${directory}/*.y*ml`, (err, matches) => {
      if (err) {
        reject(err);
      }

      resolve(matches);
    });
  });
}
