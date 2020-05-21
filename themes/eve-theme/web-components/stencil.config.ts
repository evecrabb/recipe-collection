import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'web-components',
  taskQueue: 'async',
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/scss/main.scss'
      ]
    })
  ]  
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
      copy: [
        {src: '../dist', dest: '../../static/js'}
      ]
    }
  ]
};
