import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    urlBase: "http://localhost:3000",
    isLogin: false,
    items: [],
  }),
  getters: {},
  actions: {
    async login(payload) {
      try {
        const data = await axios({
          method: "post",
          url: `${this.urlBase}/customer/login`,
          data: payload,
        });
        localStorage.setItem("access_token", data.data.access_token);

        this.isLogin = true;
        this.router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    async fetchItems() {
      try {
        const data = await axios({
          method: "get",
          url: `${this.urlBase}/items`,
        });
        this.items = data.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
