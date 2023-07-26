<template>
  <Header />
  <div class="form">
    <h2 class="form__heading">Рады снова видеть!</h2>
    <div class="form__wrapper">
      <div class="form-control">
        <input
            :class="emailInputClass"
            type="email"
            id="e-mail"
            placeholder="Email"
            v-model.trim="email"
        />
        <span class="input-text__error-message">{{ errorEmail }}</span>
      </div>
      <div class="form-control">
        <input
            :class="emailInputClass"
            type="password"
            id="password"
            placeholder="Password"
            v-model.trim="password"
        />
        <span class="input-text__error-message">{{ errorPassword }}</span>
      </div>
      <button
          class="button button__primary button_type_medium"
          @click="handleAuthorize"
          :disabled="!isEmailValid || !this.password"
      >
        Войти
      </button>
    </div>
    <div class="input-text__message">Ещё не зарегистрированы?
      <RouterLink to="/register">Регистрация</RouterLink>
    </div>
  </div>
</template>

<script>
import { authorize } from "../utils/auth";
import { PATTERNS } from "../utils/constants";
import Header from "./Header.vue";

export default {
  name: 'Login',
  components: {Header},
  data() {
    return {
      email: '',
      password: '',
      name: '',
      errorEmail: null,
      errorPassword: null,
      errorName: null,
      emailInputClass: 'input-text',
      codeInputClass: 'input-text',
      isLoggedIn: false,
    }
  },
  computed: {
    isEmailValid() {
      return PATTERNS.EMAIL.test(this.email);
    },
  },
  methods: {
    handleAuthorize() {
      authorize(this.email, this.password)
          .then(() => {
            this.isLoggedIn = true;
            localStorage.setItem('isLoggedIn', this.isLoggedIn)
            this.$router.push('/video')
          })
          .catch(() => {
            this.codeInputClass = 'input-text input-text_type_error';
          })
    }
  }
}
</script>