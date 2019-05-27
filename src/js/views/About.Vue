<template>
  <div
  @click="preventDefault"
  class="panel panel--level1 bg-dark bg-darkBlue mx-auto h-full flex flex-row justify-center items-center">
    <back-button />

    <div class="panel__content">
      <h1 class="h1">Hi there, I'm Jamie.</h1>

      <p class="lead-paragraph text-2xl mb-4">I'm an experienced full-stack developer turned <strong>entrepreneur</strong>, self funding my own products and services built mainly in Laravel and Vuejs. </p>

      <p class="mb-4 text-lg">I've over 8 years professional experience working for UK based agencies and early spring in 2019, I left my job as Technical Director of a UK agency working with Glenfiddich Whisky and Hendricks Gin to self fund time building products and services.</p>

      <p class="mb-4 text-lg">I am currently working on <a target="_blank" href="https://www.polkadottiger.com">Polkadot Tiger</a>, an A/B testing tool for metadata.</p>

      <p class="mb-4 text-lg">When I'm not working I love the outdoors and meeting new people. I regularly hike, run & lift heavy weights at <a rel="nofollow" href="https://www.instagram.com/crossfitglasshouse/" target="_blank">Crossfit Glasshouse</a>. I also eat vegan and try to live healthily and cleanly. </p>
    </div>

    <social-block />
  </div>
</template>

<script>
  import BackButton from '../components/BackButton.vue';
  import SocialBlock from '../components/SocialBlock.vue';

  export default {

    components: {
      BackButton,
      SocialBlock
    },

    data() {
      return {
        isOpen: false
      }
    },

    computed: {
      classObject() {
        return {
          "panel": true,
          "panel--level1": true,
          "background--dark-blue": true,

        }
      }
    },

    methods: {
      preventDefault(event) {
        event.stopPropagation();
      }
    },

    mounted() {
      this.isOpen = true;
    }
  };
</script>
