const { resolve } = require('path')

module.exports = function (moduleOptions) {
  const options = {
    ...{},
    ...this.options['nuxt-vue-multiselect'],
    ...moduleOptions
  }

  if (moduleOptions.vueMultiselect !== false) {
    this.options.css.push('vue-multiselect/dist/vue-multiselect.min.css')
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-vue-multiselect.js',
    options
  })
}

module.exports.meta = require('../package.json')
