<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <label>Create User</label>
      </div>
      <el-form ref="form" :model="form" label-width="120px">
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
            <el-form-item label="Name:">
              <el-input v-model="form.name" placeholder="Enter your phone number"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
            <el-form-item label="Phone Number:">
              <el-input v-model="form.number" placeholder="Enter your phone number"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Is Admin:">
              <el-select v-model="value" placeholder="Select">
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
            <el-form-item label="Job Title:">
              <el-input v-model="form.title" placeholder="Job Title"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
            <el-form-item label="Extension">
              <el-input v-model="form.title"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Is Active:">
              <el-select v-model="value" placeholder="Select"></el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
            <el-form-item label="Email:">
              <el-input v-model="form.email" placeholder="Email"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
            <el-form-item label="Password:">
              <el-input v-model="form.password" placeholder="Password" type="password"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
            <el-form-item label="Confirm Password:">
              <el-input v-model="form.password" placeholder="Password" type="password"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16">
            <el-form-item label="Email Signature">
              <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 6}"
                placeholder="Please input"
                v-model="textarea3"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button @click="onCancel">Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script> 

export default {
  data() {
    return {
      form: {
        name: ""
      },
      options: [
        {
          value: "Yes",
          label: "Yes"
        },
        {
          value: "No",
          label: "No"
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      this.$message("submit!");
    },
    onCancel() {
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

