<template>
  <div class="toDoList">
      <div class="haveToDo">
          <h2>还要做什么</h2>
          <ol>
              <li v-for="(item,i) in haveToDo" :key="i" @click="doItem">{{item}}</li>
          </ol>
      </div>
      <div class="haveDone">
          <h2>做完了什么</h2>
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
      haveToDo: ['111', '22'],
      haveDone: ['11221', '2332']
    }
  },
  methods: {
    doItem (item) {
      console.log(item)
    }
  }
}
</script>

<style scoped>

</style>
