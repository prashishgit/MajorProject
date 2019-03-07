<template>
  <div class="app-container">
     <el-card class="box-card">
         <div slot="header" class="clearfix">
    <label>Users</label>
     <el-button  type="primary" style="float: right" @click="create">New User</el-button>
    <el-autocomplete placeholder="Search" @select="handleSelect" style="float: right; margin-right: 10px">
   
    </el-autocomplete>
    
  </div>
      <el-table :data="tableData2" style="width: 100%" :row-class-name="tableRowClassName">
    <el-table-column prop="id" label="Id" width="150">
    </el-table-column>
    <el-table-column prop="name" label="Name" width="250">
    </el-table-column>
    <el-table-column prop="username" label="UserName" width="250">
    </el-table-column>
    <el-table-column prop="email" label="Email" width="250">
    </el-table-column>
    <el-table-column prop="admincheck" label="Is Admin" width="180">
    </el-table-column>
     <el-table-column prop="status" label="Status" width="190">
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
      this.$router.push({ path: "users", name: "create", });
    },
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}

</style>

