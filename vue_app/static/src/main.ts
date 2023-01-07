import 'vite/modulepreload-polyfill'
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'

// Styling
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-ui-kit/css/mdb.min.css'
import './layouts/bootstrap/css/style.css'
import './layouts/bootstrap/css/dashboard1.css'
import './plugins/webfontloader'

// Plugins
import { createPinia } from 'pinia'
import { createAxios } from './plugins/axios'
import { createLocalStorage, createVueSession } from './plugins/vue-storages'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const pinia = createPinia()
const localstorage = createLocalStorage()
const session = createVueSession()

createInertiaApp({
  resolve: (name) => import(`./pages/${name}.vue`),
  setup({ el, app, props, plugin }) {
    const instance = createApp({ render: () => h(app, props) })
    instance.use(plugin)
    instance.use(pinia)
    instance.use(createAxios())
    instance.use(localstorage)
    instance.use(session)
    instance.use((app) => {
      const csrf = document.querySelector('meta[name="csrf_token"]')
      app.config.globalProperties.csrfToken = csrf?.content
    })
    instance.component('FontAwesomeIcon', FontAwesomeIcon)
    instance.mount(el)
  }
})
