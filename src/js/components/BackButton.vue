<template>
  <div>
    <span class="back-button icon" @click="goBack">
      <i class="icofont-arrow-left"></i>
    </span>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {

  computed:{

    ...mapState(['home', 'layer1'])
  },

  methods: {
    goBack(event) {
      event.stopPropagation();

      if(this.home.isHidden && this.layer1.isHidden) {
        this.$store.commit('toggleLayer1Overlay');
        this.$router.go(-1);
      }

      if(this.home.isHidden && !this.layer1.isHidden) {
        this.$store.commit('toggleHomeHidden');
        this.$router.push('/');
      }
    }
  }
}
</script>
