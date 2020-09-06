const path = require('path');
const fs = require('fs');
const _ = require('lodash');

const targets = ['asset-manifest.json', 'manifest.json'];

const customizer = (objValue, srcValue) => {
  if (_.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
};

_.each(targets, target => {
  const priorityPath = path.resolve(`build-tmp/${target}`);
  const basePath = path.resolve(`build/${target}`);
  const priorityObj = require(priorityPath);
  const baseObj = require(basePath);

  _.mergeWith(baseObj, priorityObj, customizer);

  fs.writeFileSync(priorityPath, JSON.stringify(baseObj), { encoding: 'utf8', flag: 'w' });
});
