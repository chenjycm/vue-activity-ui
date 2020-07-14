import actMarquee from './src/act-marquee.vue'

actMarquee.install = function (Vue){
    Vue.component(actMarquee.name, actMarquee)
}

export default actMarquee