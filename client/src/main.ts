import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bulma'
import '@fortawesome/fontawesome-free/css/all.css'
import { Autocomplete } from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga.css'

import App from './App.vue'
import router from './router'

createApp(App)
    .use(router)
    .use(createPinia())
    .use(Autocomplete)
    .mount('#app')
