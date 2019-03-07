<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <label>Create Bills</label>
      </div>
      <el-form ref="form" :model="form" label-width="120px">
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple"></div>
            <el-form-item label="Vendor:">
              <el-select v-model="value" placeholder="Type of click To Select" style="width:550px">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple"></div>
            <el-form-item label="Currency:">
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
          <el-col :span="6">
            <el-form-item label="Number:">
              <el-input v-model="form.number" placeholder="Enter Number"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <div class="grid-content bg-purple"></div>
            <el-form-item label="Date:">
              <el-date-picker v-model="value1" type="date" placeholder="Pick a day"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple"></div>
            <el-form-item label=" Due Date:">
              <el-date-picker v-model="value2" type="date" placeholder="Pick a day"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple"></div>
            <el-form-item label="Reference: (Optional)">
              <el-input v-model="form.Reference"></el-input>
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
            <div class="grid-content bg-purple" id="documents"></div>
            <el-form-item label="Upload Documents:">
              <el-upload class="upload-demo" :file-list="fileList">
                <el-button size="small" type="primary">Choose File</el-button>
              </el-upload>
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
        <hr>
        <el-card class="box-card" style="background-color:#409EFF">
          <label style="color:white">Please Select the vendor first</label>
        </el-card>
        <hr>
        <el-row>
          <el-col :span="6">
            <div class="grid-content bg-purple"></div>
            <el-form-item label="Item Description:">
              <el-select v-model="value" placeholder="Type of click To Select">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Vendor Price:">
              <el-input v-model="form.price"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="QTY:">
              <el-input v-model="form.quantity"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Total:">
              <el-input v-model="form.total"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="Terms and Conditions">
              <el-input type="textarea" v-model="form.desc"></el-input>
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
      ],
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "Today",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "Yesterday",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "A week ago",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: "",
      value2: ""
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

