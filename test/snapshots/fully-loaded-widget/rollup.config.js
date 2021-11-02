import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { importMetaAssets } from '@web/rollup-plugin-import-meta-assets';
import { terser } from 'rollup-plugin-terser';
import { createRequire } from "module";

const require = createRequire(import.meta.url);

export default () => {
  const {
    source,
    main,
    module,
    system,
    unpkg,
    libraryName
  } = require(`./package.json`);
  return {
    input: source,
    output: [
      {
        file: unpkg,
        name: libraryName,
        format: 'umd',
        sourcemap: true,
      },
      {
        file: module,
        format: 'esm',
        sourcemap: true,
      },
      {
        file: system,
        format: 'system',
        sourcemap: true,
      },
      {
        file: main,
        format: 'cjs',
        sourcemap: true,
      }
    ],
  
    plugins: [
      /** Resolve bare module imports */
      nodeResolve(),
      /** Minify JS */
      terser(),
      /** Bundle assets references via import.meta.url */
      importMetaAssets(),
      /** Compile JS to a lower language target */
      babel({
        babelHelpers: 'bundled',
        presets: [
          [
            require.resolve('@babel/preset-env'),
            {
              targets: [
                'last 3 Chrome major versions',
                'last 3 Firefox major versions',
                'last 3 Edge major versions',
                'last 3 Safari major versions',
              ],
              modules: false,
              bugfixes: true,
            },
          ],
        ],
      }),
    ],
  };
};
