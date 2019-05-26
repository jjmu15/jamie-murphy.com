<template>
  <div>
    <span class="back-button" @click="goBack">
      Back
    </span>
  </div>
</template>

<script>

export default {

  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>
