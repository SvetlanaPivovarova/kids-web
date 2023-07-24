<template>
  <header class="b-header">
    <RouterLink to="/"><div class="b-header__logo"></div></RouterLink>
    <div class="b-header__links-container" v-if="!toShow">
        <RouterLink class="b-header__link" to="/register">Регистрация</RouterLink>
        <button>
          <RouterLink class="button button_type_xs" to="/login">Войти</RouterLink>
        </button>
    </div>
    <div class="b-header__links-container" v-if="toShow">
      <button class="button button_type_xs" @click="signOut">Выйти</button>
    </div>
  </header>
</template>

<script>

export default {
  name: "Header",
  data() {
    return {
      isLoggedIn: localStorage.getItem('isLoggedIn'),
      toShow: ''
    }
  },
  beforeMount() {
    this.toShow = localStorage.getItem('isLoggedIn');
  },
  methods: {
    signOut() {
      localStorage.clear();
      this.isLoggedIn = false;
      this.$router.push('/');
    }
  },
  watch: {
    'isLoggedIn'() {
      this.toShow = this.isLoggedIn
    }
  }
}
</script>