
# 在 main.js 引入并注册
```
import vcolorpicker from 'vcolorpicker'
Vue.use(vcolorpicker)
```

# 在组件中使用
```
<template>
  <colorPicker v-model="color" />
</template>
<script>
  export default {
    data () {
      return {
        color: '#ff0000'
      }
    }
  }
</script>
```
