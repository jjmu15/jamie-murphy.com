<template>
  <div
  @click="preventDefault"
  class="panel panel--level1 bg-light bg-yellow mx-auto h-full flex flex-row justify-center items-center">
    <back-button />

    <div class="panel__content panel__content--no-underline">
      <h1 class="uppercase text-4xl font-black tracking-wide mb-5">Don't be shy, say hello!</h1>

      <p class="text-xl mb-5">I'd love nothing better than to hear from you. Please feel free to reach out via any of the below methods:</p>

      <p class="mb-4">
        <span class="icon">
          <i class="icofont-email"></i> hello&#64;jamie-murphy.com
        </span>
      </p>

      <p class="mb-4">
        <span class="icon">
          <i class="icofont-twitter"></i> <a href="https://www.twitter.com/jjmu15" target="_blank">@jjmu15</a>
        </span>
      </p>

      <p class="mb-5">
        <span class="icon">
        <i class="icofont-linkedin"></i> <a href="https://www.linkedin.com/in/jamie-murphy/" target="_blank">LinkedIn</a>
        </span>
      </p>

      <p class="mb-3 mt-5 text-lg">If you like any of my products/work and would like to fuel me with a coffee you may do so here:</p>
      <div class="social-item ">
        <div class="icon mx-2 inline-flex" v-tooltip="'Buy me a coffee'">
    			<i class="icofont-coffee-alt" style="font-size: 30px;" />
    		</div>
        <a class="btn btn-blue inline-flex font-sans" style="position: relative; top: -6px;" href="https://www.buymeacoffee.com/jjmu15" target="_blank">Buy me a coffee</a>
      </div>

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
