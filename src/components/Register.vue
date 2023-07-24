<template>
  <div class="form">
    <h4 class="form__heading">Добро пожаловать!</h4>
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
            type="text"
            id="password"
            placeholder="Password"
            v-model.trim="password"
        />
        <span class="input-text__error-message">{{ errorPassword }}</span>
      </div>
      <div class="form-control">
        <input
            :class="emailInputClass"
            type="text"
            id="name"
            placeholder="Name"
            v-model.trim="name"
        />
        <span class="input-text__error-message">{{ errorName }}</span>
      </div>
      <button
          class="button button_type_medium"
          @click="handleRegister"
          :disabled="!isEmailValid || !this.password || !this.name"
      >
        Зарегистрироваться
      </button>

    </div>
  </div>
</template>

<script>
import { API_URL, PATTERNS, HEADERS } from "../utils/constants";
import { authorize } from "../utils/auth";

export default {
  name: 'Register',
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
  watch: {
    'email'() {
      this.emailInputClass = 'input-text';
      this.errorEmail = null;
    },
    'isLoggedIn'() {
      this.$emit('sendIsLoggedIn', this.isLoggedIn);
    }
  },
  methods: {
    handleRegister() {
      this.signUpRequest(this.email, this.password, this.name)
    },
    async signUpRequest(email, password, name) {
      try {
        await fetch(`${API_URL}/signup`, {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
            name
          }),
          headers: HEADERS,
        })
            .then((response) => response.json())
            .then((response) => {
              console.log(response)
              authorize(this.email, this.password)
                  .catch(() => {
                    this.codeInputClass = 'input-text input-text_type_error';
                  })
            })
      } catch(error) {
        this.emailInputClass = 'input-text input-text_type_error';
        this.errorEmail = 'NetworkError when attempting to fetch resource';
        if (error.status === 406) {
          this.errorEmail = 'Пользователь с указанным email не существует'
        }
        else if(error.status === 429) {
          this.errorEmail = 'Сервер загружен, попробуйте еще раз позже'
        }
        else {
          this.errorEmail = 'NetworkError when attempting to fetch resource'
        }
      }
    },
  }
}
</script>