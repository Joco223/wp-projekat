<template>
  <div class="home">
    <h1>Single Event</h1>
    <p>{{ event }}</p>
  </div>
</template>

<script lang="ts">
import EventService from "@/services/EventService";
import { defineComponent } from "vue";

export default defineComponent({
  name: "EventSinglePage",
  data() {
    return {
      event: {},
    };
  },

  created() {
    this.getEventData();
    console.log(this.$route.params.id);
  },

  methods: {
    async getEventData() {
      EventService.getEventSingle(Number(this.$route.params.id)).then(
        ((ev) => {
          this.event = ev;
        }).bind(this)
      );
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
