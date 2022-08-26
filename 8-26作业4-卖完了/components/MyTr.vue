<template>
  <tr>
    <input type="number" v-model="item.count">&nbsp;&nbsp;&nbsp;&nbsp;{{ goodsName }} <b v-show="item.count==0">卖光了！！！</b> <br>
  </tr>
</template>

<script>
export default {
  props:['goodsName','count','item'],
  computed:{

  }
}
</script>

<style>

</style>
