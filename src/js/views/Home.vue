<template>
  <div :class="homeClasses" @click="goHome" v-touch:swipe.right="goBack">

    <div :class="logoClasses">
      <router-link class="link" to="/" @click="goHome">
        <img src="/img/logo--white.png" alt="Jamie Murphy" />
      </router-link>
    </div>

    <div class="main-nav self-center" @click="hide">
      <a href="/about" class="link" @click="goToAbout">
        About
      </a>

      <a href="/contact" class="link" @click="goToContact">
        Contact
      </a>

      <a href="/portfolio" class="link" @click="goToPortfolio">
        Portfolio
      </a>

      <a href="/blog" class="link" @click="goToBlog">
        Blog
      </a>
    </div>

    <social-block />

    <transition name="level1-animation" enter-active-class="animated slideInRightOne" leave-active-class="animated slideOutRight">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import SocialBlock from '../components/SocialBlock.vue';

  export default {

    data() {
      return {

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
      homeClasses() {
        return {
          'h-screen': true,
          'w-screen': true,
          'panel': true,
          'bg-blue': true,
          'bg-dark': true,
          'flex': true,
          'panel--clickable': this.home.isHidden
        }
      },

      ...mapState(['home'])
    },

    methods: {
      hide() {
        this.$store.commit('toggleHomeHidden');
      },

      goToAbout(event) {
        event.preventDefault();
        event.stopPropagation();

        this.$store.commit('toggleHomeHidden');
        this.$router.push('/about');
      },

      goToContact(event) {
        event.preventDefault();
        event.stopPropagation();

        this.$store.commit('toggleHomeHidden');
        this.$router.push('/contact');
      },

      goToPortfolio(event) {
        event.preventDefault();
        event.stopPropagation();

        this.$store.commit('toggleHomeHidden');
        this.$router.push('/portfolio');
      },

      goToBlog(event) {
        event.preventDefault();
        event.stopPropagation();

        this.$store.commit('toggleHomeHidden');
        this.$router.push('/blog');
      },

      goHome() {
        if(this.home.isHidden) {
          this.$store.commit('toggleHomeHidden');
          this.$router.push('/');
        }
      },

      goBack() {
        this.$store.commit('toggleHomeHidden');
        this.$router.go('/');
      }
    }
  };
</script>
