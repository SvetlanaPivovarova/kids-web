<template>
  <div class="login-form-mobile">
    <h4 class="login-form-mobile__heading">Рады снова видеть!</h4>
    <div class="login-form-mobile__wrapper">
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
            type="text"
            id="password"
            placeholder="Password"
            v-model.trim="password"
        />
        <span class="input-text__error-message">{{ errorPassword }}</span>
      </div>
      <button
          class="button button__primary button_type_medium"
          @click="handleAuthorize"
          :disabled="!isEmailValid"
      >
        Войти
      </button>

    </div>
  </div>
</template>

<script>
import { authorize } from "../utils/auth";
import { PATTERNS } from "../utils/constants";

export default {
  name: 'Login',
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
          .catch(() => {
            this.codeInputClass = 'input-text input-text_type_error';
          })
    }
  }
}
</script>