<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <label>Clients</label>
        <el-button type="primary" style="float: right" @click="create">New Clients</el-button>
        <el-autocomplete
          placeholder="Search"
          @select="handleSelect"
          style="float: right; margin-right: 10px"
        ></el-autocomplete>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" :index="indexMethod"></el-table-column>
        <!-- <el-table-column prop="id" label="Id" width="100"></el-table-column> -->
        <el-table-column prop="person" label="Person" width="200"></el-table-column>
        <el-table-column prop="company" label="Company" width="250"></el-table-column>
        <el-table-column prop="email" label="Email" width="300"></el-table-column>
        <el-table-column prop="created" label="Created At" width="200"></el-table-column>
        <el-table-column align="right" label="Edit/Delete">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
import { deletePost } from "@/api/client";
import { get } from "@/api/client";
import moment from "moment";
export default {
  data() {
    return {
      // tableData: [],
      tableData: [
        {
          id: "",
          person: "",
          company: "",
          email: "",
          created: function(value, format) {
            if (value) {
              return moment(String(value)).format(format || "MM/DD/YY");
            }
          }
        }
      ]
      
    };
  },

  created: function() {
    this.po();
  },
  methods: {
    po: function() {
      axios
        .get("https://localhost:5001/api/client")
        .then(response => {
          this.tableData = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    create() {
      this.$router.push({
        path: "clients/createClients",
        name: "createclients"
      });
    },
    indexMethod(index) {
      return index + 1;
    },
    handleEdit(index, row) {
      this.$router.push({
        path: "/client-edit",
        name: "Client-Edit",
        params: { row: row }
      
      });
     
    },
    handleDelete(index, row) {
      this.$confirm(
        "This will permanently delete the Client. Continue?",
        "Warning",
        {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "warning"
        }
      )
        .then(() => {
          this.loading = true;
          //NProgress.start();
          var client = {
            Id: row.id,
            Person: row.person,
            Currency: row.currency,
            Company: row.company,
            Billing_Address: row.billing,
            Work_Phone: row.work,
            Shipping_Addres: row.shipping
          };
          axios
            .delete("https://localhost:5001/api/client", {
              data: client,
              headers: { Authorization: "token" }
            })
            .then(res => {
              this.loading = true;
              this.$router.go(),
                this.$message({
                  type: "success",
                  message: "Delete completed"
                });
            })
            .catch(error => {
              this.$message({
                type: "info",
                message: "Delete canceled " + error
              });
            });
        })
        .catch(error => {
          this.$message({
            type: "info",
            message: "Delete " + error
          });
        });
    }
  }
};
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

