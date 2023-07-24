<template>
  <main>
    <h2>hi there home</h2>
    <p>{{getToken}}</p>
    <button @click="printToken">Print</button>
  </main>
</template>

<script>
import { checkToken } from "../utils/auth";

export default {
  data() {
    return {
      token: localStorage.getItem('token'),
      isLoggedIn: null
    }
  },
  beforeMount() {
    console.log(this.token)
    if (this.token) {
      checkToken(this.token)
          .then(() => {
            this.isLoggedIn = true
            alert('true')
          })
          .catch((err) => {
            console.log(err);
          })
    }

  },

  computed: {
    getToken() {
      this.token = localStorage.getItem('token')
    }
  },
  methods: {
    printToken() {
      alert(this.token)

    }
  },
}

</script>

