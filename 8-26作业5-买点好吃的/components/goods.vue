<template>
  <div>
    <span>{{ item.shopName }}</span> <button @click="subgoods(item.id)">-</button> {{ item.count }} <button @click="addgoods(item.id)">+</button>
  </div>
</template>

<script>

export default {
  props:['item','index'],
  methods:{
    addgoods(id){
      // this.item.count ++
      this.$emit('add',id);
    },
    subgoods(id){
      // if(this.item.count)  this.item.count --
      if(this.item.count)  this.$emit('sub',id);
    }
  }
}
</script>

<style>

</style>
