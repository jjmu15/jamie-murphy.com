<template>
  <div
  @click="goToLayer1"
  :class="layer1Classes">
    <back-button v-if="!layer1.isHidden" />

    <div class="portfolio-list flex flex-col">
      <div class="portfolio-list__item flex items-end pb-5" @click="goPDT">
          Polkadot Tiger
      </div>

      <div class="portfolio-list__item flex items-end pb-5" @click="goContentBible">
        TheCONTENTBible
      </div>
    </div>


    <transition name="level2-animation" enter-active-class="animated slideInRightTwo" leave-active-class="animated slideOutRight">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import BackButton from '../components/BackButton.vue';

  export default {

    components: {
      BackButton
    },

    computed: {
      layer1Classes() {
        return {
          'panel': true,
          'panel--level1': true,
          'panel--no-padding': true,
          'bg-dark': true,
          'bg-darkBlue' : true,
          'mx-auto': true,
          'h-full': true,
          'panel--clickable': this.layer1.isHidden
        }
      },

      ...mapState(['home', 'layer1'])
    },

    methods: {
      goToLayer1(event) {
        console.log('yo');
        event.stopPropagation();

        if(this.layer1.isHidden) {
          this.$store.commit('toggleLayer1');
          this.$router.push('/portfolio');
        }
      },

      goContentBible() {
        event.stopPropagation();
        this.$store.commit('toggleLayer1');
        this.$router.push({name: "thecontentbible"});
      },

      goPDT() {
        event.stopPropagation();
        this.$store.commit('toggleLayer1');
        this.$router.push({name: "pdt"});
      }
    }

  };
</script>
