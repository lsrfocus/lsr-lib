import util from 'util';
import path from 'path';
import sadGlob from 'glob';
import writeFile from 'write';
import * as _ from 'lodash';
import Immutable from 'immutable';

type PackageNameMap = Immutable.Map<string, string | null>;
type PackageExports = Immutable.Set<string>;
type PackageExportsMap = Immutable.Map<string, PackageExports>;

const glob = util.promisify(sadGlob);

(async () => {
  const allPackageNames = await glob('../*');

  // Map from package name to Set of all named exports.
  const packagesToExport: PackageExportsMap = Immutable.Set(allPackageNames)
    .map((dirPath) => path.basename(dirPath || ''))
    // @ts-ignore
    .delete('lsr-lib')
    .reduce(
      (reduction: PackageNameMap, packageName: string) =>
        reduction.set(packageName, null),
      Immutable.Map(),
    )
    .map((dummy: PackageNameMap, packageName: string) => {
      const lib = require(packageName);
      const exports = _.keys(lib);
      return Immutable.Set(exports).delete('default');
    });

  const exportContent = packagesToExport
    .map(
      (exports: PackageExports = Immutable.Set(), packageName: string = '') =>
        `export { ${exports.join(', ')} } from '${packageName}';`,
    )
    .join('\n');

  const content = `// AUTO-GENERATED, DO NOT EDIT.\n\n${exportContent}\n`;

  await writeFile('src/index.ts', content);
})();
