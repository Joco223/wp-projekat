<template>
  <div class="register">
    <div class="common-layout">
      <el-container>
        <el-header></el-header>
      </el-container>
      <el-main>
        <el-row justify="center">
          <el-col :span="6">
            <el-card shadow="always">
              <h2>Register</h2>
              <el-form label-position="right" label-width="100px">
                <el-form-item label="First name:">
                  <el-input v-model="show" placeholder="Name" />
                </el-form-item>
                <el-form-item label="E-mail:">
                  <el-input v-model="email" type="email" placeholder="Email" />
                </el-form-item>
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
                <el-button type="primary" @click="sendRegister"
                  >Register</el-button
                >
                <div v-if="failed">
                  <br />
                  <el-alert
                    title="User already exists"
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

export default defineComponent({
  name: "RegisterPage",
  data() {
    return {
      show: "",
      user: "",
      pass: "",
      email: "",
      failed: false,
    };
  },

  methods: {
    async sendRegister() {
      let result = await UserService.registerUser(
        this.show,
        this.user,
        this.pass,
        this.email
      );

      this.failed = false;

      if (result.data["status"] == "OK") {
        this.$router.push("/");
      } else {
        this.failed = true;
      }
    },
  },
});
</script>
