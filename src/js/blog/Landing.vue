<template>
  <div
  @click="preventDefault"
  class="panel panel--level1 bg-dark bg-green mx-auto h-full flex flex-row justify-center items-center">
    <back-button />

    <div class="panel__content">
      <h1 class="font-black text-4xl mb-5">Coming Soon...</h1>
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
