<template>
  <div class="my_div">
    <img
      :src="imgUrl"
      alt=""
    />
    <p @click="change_color(name)" :style="{ ['background-color']: color }">{{ name }}</p>
  </div>
</template>

<script>
export default {
  props:['imgUrl','name'],
  data() {
    return {
      color: "",
    }
  },
  methods: {
    change_color(){
      this.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
      this.$emit('add',this.name);
    }
  },
};
</script>

<style>
.my_div {
  width: 200px;
  border: 1px solid black;
  text-align: center;
  float: left;
}

.my_div img {
  width: 100%;
  height: 200px;
}
</style>
