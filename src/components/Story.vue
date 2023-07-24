<template>
  <section class="content">
    <div class="content__wrapper">
      <h2 class="content__heading">Почему я люблю программирование?</h2>
      <p class="content__text">Первое знакомство с программированием было, как у многих, еще в школе. Тогда казалось, что это магия: несколько строк и машина сама считает за тебе пример без всякого нажатия на кнопки калькулятора.</p>
      <p class="content__text">Потом был собственноручно написанный блог на CMS Drupal, это были времена зарождения социальных сетей, а блоггинг был только у своих истоков.</p>
      <p class="content__text">Потом язык разметки HTML и каскадные таблицы стилей CSS помогли мне и подруги продавать тысячи матрешек на E-bay.</p>
      <p class="content__text">Потом быд первый Морской бой на поле 4х4, который я сама написала на языке JavaScript.</p>
      <p class="content__text">А потом...</p>
      <p class="content__text">... я поняла, что хочу окунуться в мир Вэба как автор и создатель сайтов и приложений.</p>
      <div class="content__link">
        <RouterLink to="/video">Посмотри свое первое видео про CSS прямо сейчас</RouterLink>
      </div>
    </div>
    <img src="src/assets/story.jpg" alt="Фотография автора">


  </section>
</template>

<script>
export default {
  name: 'Story'
}
</script>