# Usage

1. `yarn`

2. `yarn build`

3. Inspect the resulting `dist/bundle.js`. If you search for `f0f4`, the unicode for the `faCoffee` icon,
   you won't find it because it was not referenced in the source in `src/index.js` and therefore eliminated
   from the production bundle.
