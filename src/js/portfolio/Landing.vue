<template>
  <div
  @click="preventDefault"
  class="panel panel--level1 panel--no-padding bg-dark bg-darkBlue mx-auto h-full ">
    <back-button />

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
  import BackButton from '../components/BackButton.vue';

  export default {

    components: {
      BackButton
    },

    methods: {
      preventDefault(event) {
        event.stopPropagation();
      },

      goContentBible() {
        console.log('yo');
        this.$router.push({name: "thecontentbible"});
      },

      goPDT() {
        console.log('yo');
        this.$router.push({name: "pdt"});
      }
    }

  };
</script>
