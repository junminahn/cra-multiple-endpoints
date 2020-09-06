#!/usr/bin/env bash

set -o pipefail

rm -rf build-tmp
rm -rf build-tmp2

mv -n src/index.js src/index.tmp

echo "require('./base');" >src/index.js
yarn build
mv build build-tmp

echo "require('./coreui');" >src/index.js
yarn build
cp -r build build-tmp2

mv -n src/index.tmp src/index.js

mv build/index.html build/admin.html
node scripts/merge-json.js
rsync -a build-tmp/ build
