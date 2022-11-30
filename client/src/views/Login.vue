<script>
import { mapActions } from "pinia";

import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["login"]),
    loginHandler() {
      this.login({ email: this.email, password: this.password });
    },
  },
};
</script>

<template>
  <div class="login col-10">
    <h3>Login</h3>
    <form v-on:submit.prevent="loginHandler">
      <div class="mb-3">
        <label for="login-email" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="login-email"
          placeholder="Enter email address ..."
          required
          v-model="email"
        />
      </div>
      <div class="mb-3">
        <label for="login-password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="login-password"
          rows="3"
          required
          placeholder="Enter your password ..."
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Sign In</button>
    </form>
  </div>
</template>
