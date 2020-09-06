#!/usr/bin/env bash

set -o pipefail

yarn build
mv build build-tmp
mv build-tmp/index.html build-tmp/admin.html
yarn build:coreui
node scripts/merge-json.js
rsync -a build-tmp/ build
