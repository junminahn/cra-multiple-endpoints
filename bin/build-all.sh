#!/usr/bin/env bash

set -o pipefail

build() {
    rm -rf build-${1}
    echo "require('./${1}');" >src/index.js
    yarn build
    cp -r build build-${1}
}

log_error() {
    printf '\e[31mERROR: %s\n\e[39m' "$1" >&2
}

mv -n src/index.js src/index.tmp

build base
build coreui

mv -n src/index.tmp src/index.js

mv build/index.html build/admin.html
node scripts/merge-json.js
rsync -a build-base/ build
