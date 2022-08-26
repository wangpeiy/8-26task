<template>
  <div class="my-product">
    <h3>{{ title }}</h3>
    <p>{{ price }}</p>
    <p>{{ active }}</p>
    <div>
      <button @click="subPrice">砍一刀</button>
    </div>
  </div>
</template>

<script>
export default {
  props:['title','price','active'],
  methods: {
    subPrice(){
      this.$emit('sub');
    }
  },
}
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>
