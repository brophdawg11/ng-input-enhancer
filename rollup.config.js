export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/ng-input-enhancer.umd.js',
  sourceMap: false,
  format: 'umd',
  exports: 'named',
  moduleName: 'ng.input.enhancer',
  moduleId: 'ng-input-enhancer',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/forms': 'ng.forms'
  }
}
