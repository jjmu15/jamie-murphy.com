<template>
  <div>
    <h1>Home</h1>

    <router-link tag="li" to="/about">
      <a>About</a>
    </router-link>

    <router-link tag="li" to="/contact">
      <a>Contact</a>
    </router-link>

    <router-link tag="li" to="/portfolio">
      <a>Portfolio</a>
    </router-link>

    <router-view></router-view>
  </div>
</template>

<script>

  export default {

  };
</script>
