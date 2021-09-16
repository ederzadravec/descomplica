const path = require('path');

module.exports = function ({ env, paths }) {
  return {
    babel: {
      plugins: ['transform-inline-environment-variables'],
    },
    webpack: {
      alias: {
        assets: path.resolve(__dirname, `src/assets/`),
        components: path.resolve(__dirname, `src/components/`),
        pages: path.resolve(__dirname, `src/pages`),
        utils: path.resolve(__dirname, `src/utils`),
        templates: path.resolve(__dirname, `src/templates`),
      },
    },
  };
};
