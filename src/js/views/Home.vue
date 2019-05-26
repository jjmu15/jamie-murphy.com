<template>
  <div class="h-screen w-screen panel bg-blue bg-dark" @click="goHome">

    <div class="logo">
      <router-link class="link" to="/">
        <img src="/img/logo--white.png" alt="Jamie Murphy" />
      </router-link>
    </div>

    <div class="main-nav" @click="hide">
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
  import SocialBlock from '../components/SocialBlock.vue';

  export default {

    data() {
      return {
        isHidden: false
      }
    },

    components: {
      SocialBlock
    },

    methods: {
      hide() {
        this.isHidden = true;
      },

      goToAbout(event) {
        event.preventDefault();
        event.stopPropagation();

        this.$router.push('/about');
        this.isHidden = true;
      },

      goToContact(event) {
        event.preventDefault();
        event.stopPropagation();

        this.$router.push('/contact');
        this.isHidden = true;
      },

      goToPortfolio(event) {
        event.preventDefault();
        event.stopPropagation();

        this.$router.push('/portfolio');
        this.isHidden = true;
      },

      goToBlog(event) {
        event.preventDefault();
        event.stopPropagation();

        this.$router.push('/blog');
        this.isHidden = true;
      },

      goHome() {
        if(this.isHidden) {
          this.$router.push('/');
        }
      }
    }
  };
</script>
