<template>
  <div>
    <table>
      <MyTr v-for="(item,index) in goodsArr" :key="index"
        :goodsName="item.goodsName"
        :count="item.count"
        :item="item"
      ></MyTr>
      <tr>All Number:{{ AllNumber }}</tr>
    </table>
  </div>
</template>

<script>
import MyTr from '@/components/MyTr'
export default {
  components:{MyTr},
  data() {
    return {
      goodsArr: [
        {
            count: 0,
            goodsName: "Watermelon"
        },
        {
            count: 0,
            goodsName: "Banana"
        },
        {
            count: 0,
            goodsName: "Orange"
        },
        {
            count: 0,
            goodsName: "Pineapple"
        },
        {
            count: 0,
            goodsName: "Strawberry"
        }
      ]
    }
  },
  computed:{
    AllNumber(){
      return this.goodsArr.reduce((acc,item) =>  acc += +(item.count), 0)
    }
  }
}
</script>

<style>

</style>
