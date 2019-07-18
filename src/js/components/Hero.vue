<template>
  <div class="hero section">
    <div :class="['hero__image', name ]">
      <div class="hero__content hero__content--light">
        <h1 class="h1 text-6xl">Budapest</h1>
      </div>
    </div>

    <a href="#" class="hero__scroll" @click="scrollTo">
      <i class="icofont-hand-drawn-down"></i>
    </a>
  </div>
</template>

<script>

export default {
  props: ['name'],

  methods: {
    scrollTo() {
      let options = {
        container: '#panel__content',
        easing: 'ease-in',
        offset: -60,
        force: true,
      };

      this.$scrollTo('#location__content', 500, options);
    }
  }
};
</script>
