<script>
import { mapWritableState } from "pinia";
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import { useCounterStore } from "./stores/counter";

export default {
  components: {
    Navbar,
  },
  created() {
    if (!localStorage.access_token) {
      this.isLogin = false;
    } else {
      this.isLogin = true;
    }
  },
  computed: {
    ...mapWritableState(useCounterStore, ["isLogin"]),
  },
};
</script>

<template>
  <Navbar v-if="isLogin" />
  <RouterView />
</template>
