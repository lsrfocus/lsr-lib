import util from 'util';
import path from 'path';
import sadGlob from 'glob';
import writeFile from 'write';
import * as _ from 'lodash';
import Immutable from 'immutable';

const glob = util.promisify(sadGlob);

(async () => {
  const allPackageNames = await glob('../*');

  // Map from package name to Set of all named exports.
  const packagesToExport = Immutable.Set(allPackageNames)
    .map((dirPath) => path.basename(dirPath))
    .delete('lsr-lib')
    .reduce(
      (reduction, packageName) => reduction.set(packageName, null),
      Immutable.Map()
    )
    .map((dummy, packageName) => {
      const lib = require(packageName);
      const exports = _.keys(lib);
      return Immutable.Set(exports).delete('default');
    });

  const exportContent = packagesToExport
    .map((exports, packageName) => `export { ${exports.join(', ')} } from '${packageName}';`)
    .join('\n');

  const content = `// AUTO-GENERATED, DO NOT EDIT.\n\n${exportContent}\n`;

  await writeFile('src/index.ts', content);
})();
