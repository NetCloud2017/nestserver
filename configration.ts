import { readFileSync } from 'node:fs';
import * as yaml from 'js-yaml';
import { join } from 'node:path';
import { ConfigFactory } from '@nestjs/config';
const CONFIG_FILE_PATH = 'config/config.yml';
const filePath = join(__dirname, CONFIG_FILE_PATH);

export default (): ConfigFactory => {
  return yaml.load(readFileSync(filePath, 'utf8')) as ConfigFactory;
};
