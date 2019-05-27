<template>
  <div :class="homeClasses" @click="goHome">
    <div :class="logoClasses">
      <router-link class="link" to="/" @click="goHome">
        <img src="/img/logo--white.png" alt="Jamie Murphy" />
      </router-link>
    </div>

    <ul class="main-nav self-center" @click="hide">
      <li>
        <a href="/about" class="link font-black" @click="goToAbout">
          About
        </a>
      </li>

      <li>
        <a href="/contact" tag="li" class="link font-black" @click="goToContact">
          Contact
        </a>
      </li>

      <li>
        <a href="/portfolio" tag="li" class="link font-black" @click="goToPortfolio">
          Portfolio
        </a>
      </li>

      <li>
        <a href="/blog" tag="li" class="link font-black" @click="goToBlog">
          Blog
        </a>
      </li>
    </ul>

    <social-block />

    <transition name="level1-animation" enter-active-class="animated slideInRightOne" leave-active-class="animated slideOutRight">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
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

      goToMatt(event) {
        event.preventDefault();
        event.stopPropagation();

        this.$store.commit('toggleHomeHidden');
        this.$router.push('/matt');
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
      }
    }
  };
</script>
