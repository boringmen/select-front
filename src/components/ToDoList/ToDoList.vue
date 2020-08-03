<!--
 * @Author: your name
 * @Date: 2020-07-22 20:41:09
 * @LastEditTime: 2020-08-03 11:30:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \selectFront\src\components\ToDoList\ToDoList.vue
-->
<template>
  <div class="toDoList">
     <h2>{{this.title}}</h2>
     <el-input v-model="newThing" placeholder="请输入还要做什么"  clearable @keyup.enter.native="onSubmit"></el-input>
      <div class="haveToDo">
          <ol>
              <li v-for="(item,i) in haveToDo" :key="i" @click="doItem">{{item}}</li>
          </ol>
      </div>
      <div class="haveDone">
           <ol>
              <li v-for="(item,i) in haveDone" :key="i" @click="redoItem">{{item}}</li>
          </ol>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ToDoList',
  data () {
    return {
      newThing: '',
      haveToDo: [],
      haveDone: []
    }
  },
  props: ['title'],
  methods: {
    onSubmit () {
      this.haveToDo.push(this.newThing)
      this.newThing = ''
    },
    doItem (item) {
      this.haveToDo.splice(this.haveToDo.findIndex(it => it === item.srcElement.innerText), 1)
      this.haveDone.push(item.srcElement.innerText)
    },
    redoItem (item) {
      console.log(item.srcElement.innerText)
      this.haveDone.splice(this.haveDone.findIndex(it => it === item.srcElement.innerText), 1)
      this.haveToDo.push(item.srcElement.innerText)
    }
  }
}
</script>

<style scoped>
.haveDone {
  text-decoration:line-through;
            color: rgba(138, 133, 133, 0.377);

}
</style>
