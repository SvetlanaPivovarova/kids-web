<template>
  <main>
    <section class="container b-about">
      <div class="container-wrapper_green">
        <h2>hi there home</h2>
      </div>
    </section>


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

