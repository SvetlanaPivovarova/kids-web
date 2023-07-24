<template>
  <header class="b-header">
    <div class="b-header__logo">
      <RouterLink to="/"></RouterLink>
    </div>
    <div class="b-header__links-container">

        <RouterLink class="b-header__link" to="/register">Регистрация</RouterLink>

      <button>
        <RouterLink class="button button_type_xs" to="/login">Войти</RouterLink>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
}
</script>