<template>
  <div class="app-container">
     <el-card class="box-card">
         <div slot="header" class="clearfix">
    <label>Clients</label>
     <el-button  type="primary" style="float: right" @click="create">New Expenses</el-button>
    <el-autocomplete placeholder="Search" @select="handleSelect" style="float: right; margin-right: 10px">
   
    </el-autocomplete>
    
  </div>
      <el-table :data="tableData2" style="width: 100%" :row-class-name="tableRowClassName">
    <el-table-column prop="id" label="Id" width="150">
    </el-table-column>
    <el-table-column prop="date" label="Date" width="250">
    </el-table-column>
    <el-table-column prop="number" label="Number" width="330">
    </el-table-column>
    <el-table-column prop="clients" label="Clients" width="330">
    </el-table-column>
    <el-table-column prop="amount" label="Amount Paid" width="180">
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
      console.log(this.$router.push({ path: "createxpenses", name: "expenses" }));
    },
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}

</style>

