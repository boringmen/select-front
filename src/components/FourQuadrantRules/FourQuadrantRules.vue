<!--
 * @Author: your name
 * @Date: 2020-07-23 16:27:28
 * @LastEditTime: 2020-08-03 11:31:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \selectFront\src\components\FourQuadrantRules\FourQuadrantRules.vue
-->
<template>
  <div class="FourQuadrantRules">
    <h1>四象限方法</h1>
<el-row :gutter="20">
  <el-col :span="12"><div class="grid-content bg-purple"></div>
  <ToDoList :title="'重要并且紧急'"></ToDoList>
  </el-col>
  <el-col :span="12"><div class="grid-content bg-purple"><ToDoList  :title="'重要但不紧急'"></ToDoList></div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="12"><div class="grid-content bg-purple"><ToDoList :title="'紧急但不重要'"></ToDoList></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple"><ToDoList :title="'不重要且不紧急'"></ToDoList></div></el-col>
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
