<template>
  <div>
    <p>商品清单如下：</p>
    <li v-for="(item,index) in arr" :key="index">{{ item.shopName }}  {{ item.price }}元/份</li>
    <br><br>
    <goods v-for="item in arr"
    :key="item.id"
    :item="item"
    @add="addFn"
    @sub="subFn"
     ></goods>
    <br><br>
    <p>总价为: {{ allPrice }}</p>
  </div>
</template>

<script>
import goods from "@/components/goods.vue"
export default {
  components:{goods},
  data() {
    return {
      arr:[
        {
          "id":100,
          "shopName": "可比克薯片",
          "price": 5.5,
          "count": 0
        },
        {
          "id":200,
          "shopName": "草莓酱",
          "price": 3.5,
          "count": 0
        },
        {
          "id":300,
          "shopName": "红烧肉",
          "price": 55,
          "count": 0
        },
        {
          "id":400,
          "shopName": "方便面",
          "price": 12,
          "count": 0
        }
      ]
    }
  },
  methods:{
    addFn(id){
      let index = this.arr.findIndex(item => item.id == id);
      this.arr[index].count++
    },
    subFn(id){
      let index = this.arr.findIndex(item => item.id == id);
      this.arr[index].count--
    }
  },
  computed:{
    allPrice(){
      return this.arr.reduce((acc,item) => acc += item.price * item.count,0);
    }
  }
}
</script>

<style>

</style>
