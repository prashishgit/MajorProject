<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <label>Bills</label>
        <el-button type="primary" style="float: right" @click="create">New Bills</el-button>
        <el-autocomplete placeholder="Search" @select="handleSelect" style="float: right; margin-right: 10px"></el-autocomplete>
      </div>
      <el-table :data="tableData2" style="width: 100%" :row-class-name="tableRowClassName" stripped>
        <el-table-column prop="id" label="Id" width="100"></el-table-column>
        <el-table-column prop="date" label="Date" width="170"></el-table-column>
        <el-table-column prop="number" label="Number" width="180"></el-table-column>
        <el-table-column prop="vendor" label="Vendor" width="250"></el-table-column>
         <el-table-column prop="amount" label="Amount" width="250"></el-table-column>
         <el-table-column prop="status" label="Status" width="200"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    create() {
      console.log(this.$router.push({ path: "createbills", name: "bills" }));
    },
  }
};
</script>

