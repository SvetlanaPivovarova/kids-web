<template>
  <Header />
  <section class="video">
    <h2 class="video__title">Фишки из CSS</h2>
    <p class="video__subtitle">Предлагаю твоему вниманию короткое видео, чтобы познакомиться с удивительными возможностями CSS</p>
    <div class="video__iframes">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/sSwy0Gee1rY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="content__link content__link_type_green">
      <a href="https://github.com/SvetlanaPivovarova/kids-web/archive/refs/heads/main.zip">Скачать репозиторий этого приложения</a>
    </div>
  </section>
  <Feedback />
</template>

<script>
import Header from "../components/Header.vue";
import Feedback from "../components/Feedback.vue";

export default {
  name: 'VideoView',
  components: {Feedback, Header },
}
</script>