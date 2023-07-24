<template>
  <main>
    <section class="b-about">
      <div class="b-about__container">
        <h2 class="b-about__heading">Ты здесь - значит пришло <span>время понять Vue!</span></h2>
        <a class="b-about__link" href="#about">
            Моя история программирования
            <div class="icon"></div>
       </a>
      </div>
    </section>
    <Story />
  </main>
</template>

<script>
import { checkToken } from "../utils/auth";
import Story from "../components/Story.vue";
export default {
  components: {Story},
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

