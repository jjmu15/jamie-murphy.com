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

    <div class="intro" v-html="home.intro"></div>

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
          <a href="https://makingjamie.com" tag="li" class="link font-black" @click="goToBlog">
            Blog
          </a>
        </li>
      </ul>
    </div>

    <div class="current-location" @click="goToBudapest">
      <p class="font-black uppercase text-sm heading">Current Location</p>
      <i class="icofont-location-pin"></i> <span class="heading text-xs padded-underline">Budapest</span>
    </div>

    <social-block />

    <transition name="level1-animation" enter-active-class="animated slideInRightOne" leave-active-class="animated slideOutRight">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import SocialBlock from '../components/SocialBlock.vue'

  export default {

    data() {
      return {
        menuOpen: false,
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
        this.$store.commit('toggleHomeHidden')
      },

      toggleMenu() {
        this.menuOpen = !this.menuOpen
      },

      goToAbout(event) {
        event.preventDefault()
        event.stopPropagation()

        this.$store.commit('toggleHomeHidden')
        this.$router.push('/about')
      },

      goToContact(event) {
        event.preventDefault()
        event.stopPropagation()

        this.$store.commit('toggleHomeHidden')
        this.$router.push('/contact')
      },

      goToPortfolio(event) {
        event.preventDefault()
        event.stopPropagation()

        this.$store.commit('toggleHomeHidden')
        this.$router.push('/portfolio')
      },

      goToBlog(event) {
        event.preventDefault()
        event.stopPropagation()

        window.location = 'https://makingjamie.com'
      },

      goToBudapest(event) {
        event.preventDefault()
        event.stopPropagation()

        this.$store.commit('toggleHomeHidden')
        this.$router.push('/budapest')
      },

      goHome() {
        if(this.home.isHidden) {
          this.$store.commit('toggleHomeHidden')
          this.$router.push('/')
        }
      }
    },

    mounted() {
      if(!this.home.intro) {
        axios.get('https://cms.jamie-murphy.com/wp-json/wp/v2/pages/25')
        .then(response => {
          this.$store.commit("setHomepageIntro", response.data.content.rendered)
        })
        .catch(error => {
          //console.log(error)
        })
      }
    }
  }
</script>
