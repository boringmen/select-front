<template>
  <div class="toDoList">
     <el-input v-model="newThing" placeholder="请输入还要做什么"  clearable @keyup.enter.native="onSubmit"></el-input>
      <div class="haveToDo">
          <h2>还要做什么</h2>
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
