<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model.trim="userName" ref="dom"/>
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model.number="userAge" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="userSex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="add_edit">添加/修改</button>
    </div>
    <div>
      <table
        border="1"
        cellpadding="10"
        cellspacing="0"
      >
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="item in arr" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age}}</td>
          <td>{{ item.sex}}</td>
          <td>
            <button @click="del_data(item)">删除</button>
            <button @click="edit(item)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: true,
      myId:'',
      userName:'',
      userAge:'',
      userSex:'男',
      arr:[
        {
          id:1,
          name:'Tom',
          age:'18',
          sex:'男'
        }
      ]
    }
  },
  methods: {
    // 添加/修改按钮
    add_edit(){
    // 定义一个flag变量，如果是true就是添加功能，false就是修改功能
      if(this.flag){
        // 添加功能
        if(this.userName === '' || this.userAge ==='') return alert('个人信息不可为空！');
        const userInfo = {
          id: this.arr.length > 0 ? this.arr.at(-1).id + 1 : 1,
          name: this.userName,
          age: this.userAge,
          sex: this.userSex
        }
        this.arr.push(userInfo);
        this.userName = '';
        this.userAge = '';
      }
      else {
        // 修改功能
        let index = this.arr.findIndex(item => item.id == this.myId);
        this.arr[index].name = this.userName
        this.arr[index].age = this.userAge
        this.arr[index].sex = this.userSex
      }
    },
    // 编辑按钮事件
    edit({ id }){
      let index = this.arr.findIndex(item => item.id == id);
      this.userName = this.arr[index].name
      this.userAge = this.arr[index].age
      // 将点击获取到的id传给myId变量提供给修改功能
      this.myId = id;
      this.flag = false;
      this.$refs.dom.focus();
    },
    // 删除按钮
    del_data({ id }){
      let index = this.arr.findIndex(item => item.id == id);
      this.arr.splice(index, 1);
    }
  },
}
</script>
