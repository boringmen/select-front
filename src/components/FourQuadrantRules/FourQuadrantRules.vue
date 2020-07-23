<template>
  <div class="FourQuadrantRules">
<el-row :gutter="20">
  <el-col :span="12"><div class="grid-content bg-purple"></div>
  <ToDoList></ToDoList>
  </el-col>
  <el-col :span="12"><div class="grid-content bg-purple"><ToDoList></ToDoList></div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="12"><div class="grid-content bg-purple"><ToDoList></ToDoList></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple"><ToDoList></ToDoList></div></el-col>
</el-row>
  </div>
</template>

<script>
import ToDoList from '@/components/ToDoList/ToDoList'
export default {
  name: 'FourQuadrantRules',
  components: {ToDoList}
}
</script>

<style scoped>

</style>
