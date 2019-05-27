<template>
  <div :class="fourOhFourClasses" @click="goHome">
    <div :class="logoClasses">
      <router-link class="link" to="/" @click="goHome">
        <img src="/img/logo--white.png" alt="Jamie Murphy" />
      </router-link>
    </div>

    <div class="fourOhFour__content flex flex-col h-screen w-screen justify-center align-center items-center content-center">
      <h1 class="text-4xl uppercase tracking-wide font-black mb-4">Uh oh..</h1>
      <h2 class="text-6xl uppercase tracking-wide font-black mb-5">404</h2>
      <p class="text-lg mb-5">Mr penguin will guide you back to where you need to be. Click on him to let him know you're ready to continue.</p>

      <span :class="penguinClasses" @click="penguinHome">
        <i class="icofont-penguin"></i>
      </span>
    </div>

    <social-block />

  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import SocialBlock from '../components/SocialBlock.vue';

  export default {

    data() {
      return {
        penguin: false
      }
    },

    components: {
      SocialBlock
    },

    computed: {
      logoClasses() {
        return {
          'logo': true,
          'logo--is-small': this.home.isHidden
        }
      },
      fourOhFourClasses() {
        return {
          'h-screen': true,
          'w-screen': true,
          'panel': true,
          'bg-yellow': true,
          'bg-light': true,
          'flex': true,
          'panel--clickable': this.home.isHidden
        }
      },
      penguinClasses() {
        return {
          'penguin-guide': true,
          'icon': true,
          'animated': this.penguin,
          'rubberBand': this.penguin
        }
      },

      ...mapState(['home'])
    },

    methods: {
      goHome() {
        this.$router.push('/');
      },
      penguinHome() {
        this.penguin = true;
        let self = this;

        setTimeout(function() {
          self.$router.push('/');
        }, 500)
      }
    }
  };
</script>
