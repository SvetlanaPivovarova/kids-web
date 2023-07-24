<template>
  <div class="form form_type_wide">
    <h2 class="form__heading">Хочешь получать новости и полезные статьи из мира Vue?
    </h2>
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
        <textarea
            id="password"
            v-model="message"
            placeholder="Remember, be nice!" cols="30" rows="5"
            class="form__textarea"
        />
        <span class="input-text__error-message">{{ errorMessage }}</span>
      </div>
      <button
          class="button button__primary button_type_medium"
          @click="sendMessage"
          :disabled="!isEmailValid || !this.message"
      >
        Отправить
      </button>
    </div>
  </div>
</template>

<script>
import {PATTERNS} from "../utils/constants";

export default {
  name: 'Feedback',
  data() {
    return {
      email: '',
      message: '',
      errorEmail: '',
      errorMessage: '',
      emailInputClass: 'input-text',
    }
  },
  computed: {
    isEmailValid() {
      return PATTERNS.EMAIL.test(this.email);
    },
  },
  methods: {
    sendMessage() {
      console.log(this.message)
    }
  }
}
</script>