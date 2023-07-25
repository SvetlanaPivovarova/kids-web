<template>
  <div class="form form_type_wide">
    <h2 class="form__heading">Хочешь получать новости и полезные статьи из мира Vue?
    </h2>
    <div class="form__wrapper">
      <div class="form-control">
        <input
            :class="emailInputClass"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            v-model.trim="email"
        />
        <span class="input-text__error-message">{{ errorEmail }}</span>
      </div>
      <div class="form-control">
        <textarea
            id="password"
            v-model="message"
            name="message"
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
      <p :class="messageClass" v-if="isSend">{{isSend}}</p>
    </div>
  </div>
</template>

<script>
import { PATTERNS, SCRIPT_URL} from "../utils/constants";

export default {
  name: 'Feedback',
  data() {
    return {
      email: '',
      message: '',
      errorEmail: '',
      errorMessage: '',
      emailInputClass: 'input-text',
      isSend: '',
      messageClass: 'input-text__message'
    }
  },
  computed: {
    isEmailValid() {
      return PATTERNS.EMAIL.test(this.email);
    },
  },
  methods: {
    sendMessage() {
      const data = new FormData;
      data.append('email', this.email)
      data.append('message', this.message)
      fetch(SCRIPT_URL, { method: 'POST', body: data})
          .then(response => {
            this.isSend = "Сообщение успешно отправлено!"
          })
          .catch(error => {
            this.isSend = "К сожалению, сообщение не удалось отправить. Попробуйте еще раз!";
            this.messageClass = 'input-text__message input-text__message_type_error'
            console.error('Error', error.message)
          })
    }
  },
  watch: {
    'email'() {
      this.isSend = '';
      this.messageClass = 'input-text__message'
    },
    'message'() {
      this.isSend = '';
      this.messageClass = 'input-text__message'
    }
  }
}

</script>