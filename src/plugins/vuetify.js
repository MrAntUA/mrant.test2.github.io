import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

const opts = {
    icons: {
        iconfont: 'fa'
    },
    theme: {
        primary: '#0190e3',
        secondary: '#00E676'
    },
}

export default new Vuetify(opts)