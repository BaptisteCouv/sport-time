import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
      path:'/',
      component: require('./App.vue').default,
      name: 'root'
    },
    {
      path:'/listExercice',
      component: require('./components/ListExercice.vue').default,
      name: 'listExo'
    },
    {
      path:'/ajoutExercice',
      component: require('./components/AjoutExercice.vue').default,
      name: 'addExo',
      children: [{
        path: 'pageExo/:codeExo',
        component: require('./components/PageExercice.vue').default,
        name: 'addExo.pageExo',
      }]
    },
    {
      path:'/exercie',
      component: require('./components/Exercice.vue').default,
      name: 'exercice'
    },

    // {
    //   path:'*',
    //   redirect: '/'
    // }
  ]
})


library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
