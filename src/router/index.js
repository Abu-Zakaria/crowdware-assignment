import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Update from '@/components/Update.vue'
import View from '@/components/View.vue'
import Delete from '@/components/Delete.vue'

Vue.use(Router)

export default new Router({
  routes: [
  	{
	  	path : '/',
	  	component : Home
  	},
  	{
  		path : '/update/:rank',
  		component : Update,
  		props : true
  	},
  	{
  		path : '/view/:rank',
  		component : View,
  		props : true
  	},
  	{
  		path : '/delete/:rank',
  		component : Delete,
  		props : true
  	}
  ]
})