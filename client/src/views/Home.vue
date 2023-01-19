<template>
  <div class="home">
    <h1>Dobrodošli</h1>
    <button @click="reg">Test register</button>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",

  methods: {
    async reg() {
      const registerTest = await axios.post("http://localhost:8001/register", {
        show: "Jovan",
        user: "joco2234",
        pass: "123",
        email: "test@test.com",
      });

      console.log(registerTest);
    },
  },
});
</script>
