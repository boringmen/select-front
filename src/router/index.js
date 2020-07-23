import Vue from 'vue'
import Router from 'vue-router'
import FourQuadrantRules from '@/components/FourQuadrantRules/FourQuadrantRules'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FourQuadrantRules',
      component: FourQuadrantRules
    }
  ]
})
