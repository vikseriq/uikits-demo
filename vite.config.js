const {resolve} = require('path')
const {createVuePlugin} = require('vite-plugin-vue2')

const kitPaths = [
  'kit-bs',
  'kit-bue',
  'kit-ele',
  'kit-vf',
];
/**
 * @type {import('vite').UserConfig}
 */
const config = {
  plugins: [createVuePlugin()],
  resolve: {
    alias: [
      {
        // vite path workaround to load src-components from nested folders
        find: '#', replacement: resolve(__dirname, '/src')
      }
    ]
  },
  build: {
    brotliSize: false,
    rollupOptions: {
      // compose input subpaths dynamically
      input: kitPaths.reduce((paths, i) => {
        paths[i] = resolve(__dirname, '/' + i + '/index.html')
        return paths
      }, {
        // add index page
        main: resolve(__dirname, 'index.html'),
      })
    }
  }
}

export default config
