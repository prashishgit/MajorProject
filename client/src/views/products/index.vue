<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <label>Products</label>
        <el-button type="primary" style="float: right" @click="create">New Product</el-button>
        <el-autocomplete placeholder="Search" @select="handleSelect" style="float: right; margin-right: 10px"></el-autocomplete>
      </div>
      <el-table :data="tableData2" style="width: 100%" :row-class-name="tableRowClassName" stripped>
        <el-table-column prop="id" label="Id" width="150"></el-table-column>
        <el-table-column prop="productcode" label="Product Code" width="350"></el-table-column>
        <el-table-column prop="description" label="Description" width="350"></el-table-column>
        <el-table-column prop="unit" label="Unit Price" width="350"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

