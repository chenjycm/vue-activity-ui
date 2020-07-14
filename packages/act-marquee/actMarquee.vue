<template>
    <div class="act-marquee">
        我是一个跑马灯
    </div>
</template>

<script>
export default {
    name: 'act-marquee',
    props:{
        time: {
            type: Number,
            default: 600,
        }
    }
}
</script>
<style type="text/css" scoped> 
.act-marquee{
    color: red;
}
</style>