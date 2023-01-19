<template>
  <div class="register">
    <div class="common-layout">
      <el-container>
        <el-header></el-header>
      </el-container>
      <el-main>
        <el-row justify="center">
          <el-col :span="8">
            <el-card shadow="always">
              <h2>Login</h2>
              <el-form label-position="right" label-width="100px">
                <el-form-item label="Username:">
                  <el-input v-model="user" placeholder="Username" />
                </el-form-item>
                <el-form-item label="Password:">
                  <el-input
                    v-model="pass"
                    type="password"
                    placeholder="Password"
                    show-password
                  />
                </el-form-item>
                <el-button type="primary" @click="sendLogin">Log in</el-button>
                <div v-if="failed">
                  <br />
                  <el-alert
                    :title="errMsg"
                    type="error"
                    :closable="false"
                    v-if="failed"
                  />
                </div>
              </el-form>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </div>
  </div>
</template>

<script lang="ts">
import UserService from "@/services/UserService";
import { defineComponent } from "vue";
import CryptoJS from "crypto-js";

export default defineComponent({
  name: "LoginPafe",
  data() {
    return {
      user: "",
      pass: "",
      failed: false,
      errMsg: "",
    };
  },

  methods: {
    async sendLogin() {
      this.failed = false;

      if (this.user != "" && this.pass != "") {
        const hashed = CryptoJS.SHA256(this.pass, "DobraSifra").toString();

        let result = await UserService.loginUser(this.user, hashed);

        if (result.data["status"] == "OK") {
          this.$router.push("/");
          localStorage.setItem("key", result.data["tkn"]);
        } else {
          this.failed = true;
          this.errMsg = "Username or password is incorrect";
          this.pass = "";
        }
      } else {
        this.failed = true;
        this.errMsg = "All input fields are required";
        this.pass = "";
      }
    },
  },
});
</script>
