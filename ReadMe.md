### Running the program

use `node --experimental-specifier-resolution=node calculator.js`

> _The `--experimental-specifier-resolution=node` flag is used to help ignoring the file extensions. This can be removed in the future._ \
> \
> _The "main": "index.js" property in package.json is used to default to `index.js` when importing directories_

#

- CJS modules cannot import ESM modules with `require`
- CJS modules need to use dynamic import to import ESM
- ESM modules can import CJS modules with `* as` as there is no default
- with `esModuleInterop` flag set to `true`, the `* as` can be dropped

> Node.js was developed before ESM became the new standard, hence default is CJS \
> \
> For Node to support ESM, we either use `.mjs` or use `"type":"module"`

#

### some links for interoperability

https://sliceofdev.com/posts/commonjs-and-esm-modules-interoperability-in-nodejs

https://www.mariokandut.com/how-to-dynamically-load-an-esm-module-in-cjs/

https://adamcoster.com/blog/commonjs-and-esm-importexport-compatibility-examples

#

### links related to module definitions & understanding JS modules

https://www.youtube.com/watch?v=I3DrifH-rJE

https://irian.to/blogs/what-are-cjs-amd-umd-and-esm-in-javascript/

https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm

https://formidable.com/blog/2021/node-esm-and-exports/

https://www.typescriptlang.org/docs/handbook/esm-node.html

https://nodejs.org/api/esm.html

https://nodejs.org/dist/latest-v18.x/docs/api/timers.html#timerspromisessettimeoutdelay-value-options
