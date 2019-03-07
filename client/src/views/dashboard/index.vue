<template>
  <div class="dashboard-container">
    <div id="app">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <label>OverView</label>
        </div>
        <el-row :gutter="12">
          <el-col :span="6">
            <el-card shadow="hover" class="card">
              <div slot="header" class="clearfix">
                <label>Account Receivable</label>
              </div>100000
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="hover"  class="card">
              <div slot="header" class="clearfix">
                <label>Total Revenue</label>
              </div>100000
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="hover" class="card">
              <div slot="header" class="clearfix">
                <label>Open Sales</label>
              </div>100000
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="hover" class="card">
              <div slot="header" class="clearfix">
                <label>Unpaid Invoices</label>
              </div>100000
            </el-card>
          </el-col>
        </el-row>
        <br>
        <el-row :gutter="12">
          <el-col :span="6">
            <el-card shadow="hover" class="card">
              <div slot="header" class="clearfix">
                <label>Account Payable</label>
              </div>100000
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="hover" class="card">
              <div slot="header" class="clearfix">
                <label>Total Expenses</label>
              </div>100000
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="hover" class="card">
              <div slot="header" class="clearfix">
                <label>Open Purchase</label>
              </div>100000
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="hover" class="card">
              <div slot="header" class="clearfix">
                <label>Unpaid Bills</label>
              </div>100000
            </el-card>
          </el-col>
        </el-row>
      </el-card>
    </div>
    <br>
    <div id="graph">
      <el-row>
        <el-col :span="15">
          <div class="grid-content bg-purple"></div>
          <el-card>
            <div slot="header" class="clearfix">
              <label>Income Expenses Profit</label>
            </div>
            <GChart type="ColumnChart" :data="chartData" :options="chartOptions"/>
          </el-card>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-light"></div>
          <el-card class="box-card" id="tabledata">
            <div slot="header" class="clearfix">
              <label>Top 10 Unpaid Invoices</label>
            </div>
            <el-table :data="tableData" stripe style="width: 100%">
              <el-table-column prop="number" label="Number" width="140"></el-table-column>
              <el-table-column prop="duedate" label="Due Date" width="140"></el-table-column>
              <el-table-column prop="dueamount" label="DueAmount" width="140"></el-table-column>
            </el-table>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { GChart } from "vue-google-charts";
export default {
  name: "dashboard",
  computed: {},
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        }
      }
    };
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
#tabledata {
  margin-left: 20px;
  width: 465px;
}
.card{
  background-color: #f7f8f9;
}

</style>
