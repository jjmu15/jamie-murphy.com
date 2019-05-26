<template>
  <div>
    <span class="back-button icon" @click="goBack">
      <i class="icofont-arrow-left"></i>
    </span>
  </div>
</template>

<script>

export default {

  methods: {
    goBack() {
      this.$store.commit('toggleHomeHidden');
      this.$router.go(-1);
    }
  }
}
</script>
