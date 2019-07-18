<template>
  <div
  @click="preventDefault"
  class="panel panel--level1 panel--no-padding bg-light bg-white mx-auto h-full flex flex-row justify-center items-center">
    <back-button />

    <div id="panel__content" class="panel__content">
      <hero name="budapest"></hero>

      <div id="location__content" class="location__content">
        <p class="lead-paragraph text-2xl mb-4 mt-4">Budapest is my adopted home</p>

        <p class="mb-4 text-lg">I came to Budapest for the first time in summer 2015. It was the 4th stop on my working travels around Europe in my very first remote working role.</p>

        <p class="mb-10 text-lg">I fell in love with the city, its culture, social life and beauty pretty quickly and 4 years later I can't imagine anywhere else being my home whenever I am not travelling elsewhere.</p>

        <vue-instagram token="1603929.786589e.0af0cbcd2afd43c1815ee48f8084ffc6" count="200" :tags="['budapest']" mediaType="image">
          <template slot="feeds" slot-scope="props">
            <li class="ig-list">
              <img :src="props.feed.images.standard_resolution.url" />
            </li>
          </template>
          <template slot="error" slot-scope="props">
            <div class="fancy-alert"> {{ props.error.error_message }} </div>
          </template>
        </vue-instagram>
      </div>
    </div>

    <social-block />
  </div>
</template>

<script>
  import BackButton from '../components/BackButton';
  import SocialBlock from '../components/SocialBlock';
  import Hero from '../components/Hero';

  export default {
    components: {
      BackButton,
      SocialBlock,
      Hero
    },

    methods: {
      preventDefault(event) {
        event.stopPropagation();
      }
    },
  };
</script>
