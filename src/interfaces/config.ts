export interface DocumentConfig {
  title: string;
  lang: string;
}

export interface MakecatConfig {
  template: string;
  output: string;
  sourceDirectory: string;
  document: DocumentConfig;
}

export interface Config {
  makecat: MakecatConfig;
}
