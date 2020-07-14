import actMarquee from './actMarquee.vue'

let _actMarquee = {}
_actMarquee.install = function (Vue){
    Vue.component(actMarquee.name, actMarquee)
}

export default actMarquee