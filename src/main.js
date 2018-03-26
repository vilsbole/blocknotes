// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { truncate } from 'lodash'
import Vue from 'vue'
import Logger from 'vue-logger'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
import format from 'date-fns/format'
import router from './router'
import App from './App'

Vue.config.productionTip = false

Vue.use(Logger, {
  prefix () { return new Date() },
  dev: true,
  shortname: true,
  levels: ['log', 'warn', 'debug', 'error', 'dir']
})

Vue.filter('truncate', function (value) {
  return truncate(value, { length: 70, omission: '...' })
})

Vue.filter('since', function (value) {
  const date = new Date(value * 1000)
  return distanceInWordsToNow(date)
    .replace('about', '')
    .replace('less than a', '0')
    .replace('seconds', 'secs')
    .replace('minute', 'min')
    .replace('minutes', 'min')
})

Vue.filter('humanReadable', function (value) {
  if (!value) { return }
  const date = new Date(value * 1000)
  return format(date, 'DD MMMM YYYY [at] HH:mm')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
