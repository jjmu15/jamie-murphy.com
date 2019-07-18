<template>
  <div :class="homeClasses" @click="goHome">
    <div :class="logoClasses">
      <router-link class="link" to="/" @click="goHome">
        <img src="/img/logo--white.png" alt="Jamie Murphy" />
      </router-link>
    </div>

    <div class="menu-icon">
      <i :class="menuIconClasses"
        @click="toggleMenu"
      ></i>
    </div>

    <div class="intro">
      <h1 class="font-black heading">Bespoke web application developer</h1>
      <p class="strapline">
        I'm proud to have helped
        <span class="padded-underline">LADBible</span>,
        <span class="padded-underline">Glenfiddich Whisky</span>,
        <span class="padded-underline">Sailor Jerry Clothing</span>,
        <span class="padded-underline">Aerstone Whisky</span>
        & many more amazing clients to achieve their online goals.

        <br /><br />

        Founder of <a target="_blank" href="https://www.polkadottiger.com">Polkadot Tiger</a> and <a target="_blank" href="https://www.techsource.hu">Techsource</a>.
      </p>
    </div>

    <div :class="menuClasses" @click="hide">
      <ul>
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

        <!-- <li>
          <a href="/portfolio" tag="li" class="link font-black" @click="goToPortfolio">
            Portfolio
          </a>
        </li> -->

        <li>
          <a href="/blog" tag="li" class="link font-black" @click="goToBlog">
            Blog
          </a>
        </li>
      </ul>
    </div>

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
        menuOpen: false
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
      menuClasses() {
        return {
          'main-nav': true,
          'self-center': true,
          'main-nav--open': this.menuOpen
        }
      },
      menuIconClasses() {
        return {
          'icofont-navigation-menu': !this.menuOpen,
          'icofont-ui-close': this.menuOpen
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

      toggleMenu() {
        this.menuOpen = !this.menuOpen;
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
