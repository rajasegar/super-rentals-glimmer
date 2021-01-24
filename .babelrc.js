module.exports = function (api) {
  return {
    plugins: [
      ['@glimmer/babel-plugin-glimmer-env', { DEBUG: !api.env('production') }],
      '@glimmer/babel-plugin-strict-template-precompile',
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      '@babel/plugin-proposal-class-properties',
      ['@babel/plugin-transform-runtime', { 'regenerator': true }]
    ],
    presets: ['@babel/preset-env'],
  };
};
