<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <label>Create Clients</label>
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
            <el-form-item label="Mobile Number:" prop="mobile">
              <el-input v-model="form.mobile"></el-input>
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
              <el-input v-model="form.work"></el-input>
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
            <el-form-item label="Billing Address" prop="billing">
              <el-input
                type="textarea"
                :autosize="{ minRows: 3, maxRows: 6}"
                placeholder="Please input"
                v-model="form.billing"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Shipping Address" prop="shipping">
              <el-input
                type="textarea"
                :autosize="{ minRows: 3, maxRows: 6}"
                placeholder="Please input"
                v-model="form.shipping"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('form')">Create</el-button>
          <el-button @click="onCancel('form')">Reset</el-button>
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
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input all the fields"));
      } else {
        if (this.form.checkPass !== "") {
          this.$refs.form.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      form: {
        person: "",
        mobile: "",
        currency: "",
        company: "",
        work: "",
        email: "",
        billing: "",
        shipping: ""
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
          { required: true, message: "Please input email", pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, trigger: "blur" }
        ],


        mobile: [
          { required: true, message: "Please input mobile", trigger: "blur" }
        ],
        billing: [
          { required: true, message: "Please input billing", trigger: "blur" }
        ],
        shipping: [
          { required: true, message: "Please input shipping", trigger: "blur" }
        ]
      }
    };
  },
  // created: function(){
  //    this.po();
  // },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true;

          axios
            .post("https://localhost:5001/api/client", {
              Person: this.form.person,
              Mobile_Number: this.form.mobile,
              Currency: this.form.value,
              Company: this.form.company,
              Work_Phone: this.form.work,
              Email: this.form.email,
              Billing_Address: this.form.billing,
              Shipping_Address: this.form.shipping,
              Created: new Date()
            })
            .then(res => {
              this.$router.back();
              this.loading = false;
              //NProgress.done();
              this.$message({
                type: "success",
                message: "Client Add completed"
              });
            });
        } else {
          this.$message({
            type: "info",
            message: "client Add Canceled"
          });
          return false;
        }
      });
    }
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // }
  },
  onCancel() {
    this.$message({
      message: "cancel!",
      type: "warning"
    });
  }
};
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

