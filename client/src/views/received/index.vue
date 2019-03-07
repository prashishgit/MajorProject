<template>
  <div class="app-container">
     <el-card class="box-card">
         <div slot="header" class="clearfix">
    <label>Received Order</label>
    
    <el-autocomplete placeholder="Search" @select="handleSelect" style="float: right; margin-right: 10px">
   
    </el-autocomplete>
    
  </div>
      <el-table :data="tableData2" style="width: 100%" :row-class-name="tableRowClassName">
    <el-table-column prop="id" label="Id" width="250">
    </el-table-column>
    <el-table-column prop="date" label="Date" width="300">
    </el-table-column>
    <el-table-column prop="number" label="Number" width="300">
    </el-table-column>
    <el-table-column prop="status" label="Status" width="350">
    </el-table-column>
   
  </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {   
    
    }
  },
  methods: {
    create() {
      this.$router.push({ path: "create", name: "Create" });
    },
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}

</style>

