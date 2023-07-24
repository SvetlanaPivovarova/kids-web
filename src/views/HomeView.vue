<template>
  <main>
    <section class="section">
      <div class="b-about">
        <h2 class="b-about__heading">Ты здесь - значит пришло <span>время понять Vue!</span></h2>
      </div>
      <div class="icon">
        <a></a>
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

