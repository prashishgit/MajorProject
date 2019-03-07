<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <label>Edit Clients</label>
      </div>
      <el-form ref="form" :model="form" :rules="rules" label-width="120px">
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
            <el-form-item label="Person:" prop="person">
              <el-input v-model="form.person"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
            <el-form-item label="Mobile Number:" prop="mobile_Number">
              <el-input v-model="form.mobile_Number"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Currency:" prop="currency">
              <el-select v-model="form.currency" placeholder="Select the currency">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
            <el-form-item label="Company:" prop="company">
              <el-input v-model="form.company"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
            <el-form-item label="Work Phone:">
              <el-input v-model="form.work_Phone"></el-input>
            </el-form-item>
          </el-col>
          <!-- <el-col :span="8">
            <el-form-item label="Is Active:">
              <el-select v-model="value" placeholder="Select"></el-select>
            </el-form-item>
          </el-col>-->
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
            <el-form-item label="Email:" prop="email">
              <el-input v-model="form.email" placeholder="Email"></el-input>
            </el-form-item>
          </el-col>
          <!-- <el-col :span="8">
            <div class="grid-content bg-purple"></div>
            <el-form-item label="Password:">
              <el-input v-model="form.password" placeholder="Password" type="password"></el-input>
            </el-form-item>
          </el-col>-->
          <!-- <el-col :span="8">
            <div class="grid-content bg-purple"></div>
            <el-form-item label="Confirm Password:">
              <el-input v-model="form.password" placeholder="Password" type="password"></el-input>
            </el-form-item>
          </el-col>-->
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="Billing Address" prop="billing_Address">
              <el-input
                type="textarea"
                :autosize="{ minRows: 3, maxRows: 6}"
                placeholder="Please input"
                v-model="form.billing_Address"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Shipping Address" prop="shipping_Address">
              <el-input
                type="textarea"
                :autosize="{ minRows: 3, maxRows: 6}"
                placeholder="Please input"
                v-model="form.shipping_Address"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button type="success" @click="onSubmit('form')">Save</el-button>
          <el-button @click="onCancel('form')">Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
Vue.prototype.$http = axios;
import { addPost } from "@/api/client";
export default {
  data() {
    return {
      form: {
        person: "",
        mobile: "",
        currency: "",
        company: "",
        work: "",
        email: "",
        billing: "",
        shipping: "",
        created: new Date()
      },
      options: [
        {
          value: "usd",
          label: "US Dollar"
        },
        {
          value: "nrs",
          label: "Nepalese Rupees"
        },
        {
          value: "irs",
          label: "Indian Rupees"
        },
        {
          value: "aud",
          label: "Australian Dollar"
        },
        {
          value: "euro",
          label: "Euro"
        }
      ],
      value: "",
      rules: {
        person: [
          {
            required: true,
            message: "Please input person",
            trigger: "blur"
          }
        ],
        company: [
          { required: true, message: "Please input company", trigger: "blur" }
        ],
        currency: [
          { required: true, message: "Please input currency", trigger: "blur" }
        ],
        email: [
          {
            required: true,
            message: "Please input email",
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            trigger: "blur"
          }
        ],

        mobile_Number: [
          { required: true, message: "Please input mobile", trigger: "blur" }
        ],
        billing_Address: [
          { required: true, message: "Please input billing", trigger: "blur" }
        ],
        shipping_Address: [
          { required: true, message: "Please input shipping", trigger: "blur" }
        ]
      }
    };
  },

  created() {
    this.form = this.$route.params.row;
    console.log(this.$route.params.row);
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true;
          axios
            .put("https://localhost:5001/api/client", {
              Id: this.form.id,
              Person: this.form.person,
              Mobile_Number: this.form.mobile_Number,
              Currency: this.form.currency,
              Company: this.form.company,
              Work_Phone: this.form.work_Phone,
              Email: this.form.email,
              Billing_Address: this.form.billing_Address,
              Shipping_Address: this.form.shipping_Address,
              Created: new Date()
            })
            .then(res => {
              this.$router.back();
              this.loading = false;
              //NProgress.done();
              this.$message({
                type: "success",
                message: "Client Updated completed"
              });
            });
        } else {
          this.$message({
            type: "info",
            message: "client Updated Canceled"
          });
          return false;
        }
      });
    },
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // },
    onCancel(formName) {
      console.log("Hello World");
       this.$router.back(),
      this.$message({
        message: "cancel!",
        type: "warning"
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

