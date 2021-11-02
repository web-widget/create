import { join } from 'path';

const COMMAND_PATH = join(__dirname, '../src/create.js');

export function generateCommand({ destinationPath = '.' } = {}) {
  return `node -r @babel/register ${COMMAND_PATH} \
      --destinationPath ${destinationPath} \
      --type scaffold \
      --framework lit\
      --features linting testing demoing building \
      --pkgName scaffold-widget \
      --writeToDisk true \
      --installDependencies false
  `;
}
