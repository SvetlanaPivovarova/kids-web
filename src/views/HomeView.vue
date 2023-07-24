<template>
  <Header />
  <main>
    <section class="b-about">
      <div class="b-about__container">
        <h2 class="b-about__heading">Ты здесь - значит пришло <span>время понять Vue!</span></h2>
        <p class="b-about__link">
            Моя история программирования
            <span class="icon"></span>
       </p>
      </div>
    </section>
    <Story />
  </main>
</template>

<script>
import { checkToken } from "../utils/auth";
import Header from "../components/Header.vue";
import Story from "../components/Story.vue";
export default {
  components: { Story, Header },
  data() {
    return {
      token: localStorage.getItem('token'),
      isLoggedIn: null
    }
  },
  beforeMount() {
    if (this.token) {
      checkToken(this.token)
          .then(() => {
            this.isLoggedIn = true
          })
          .catch((err) => {
            console.log(err);
          })
    }
  },

}

</script>

