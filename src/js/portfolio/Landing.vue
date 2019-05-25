<template>
  <div>
    <h1>Portfolio</h1>

    <router-link tag="li" :to="{ name: 'pdt' }">
      <a>Polkadot Tiger</a>
    </router-link>

    <router-link tag="li" :to="{ name: 'thecontentbible' }">
      <a>TheCONTENTBible</a>
    </router-link>

    <router-view></router-view>
  </div>
</template>

<script>

  export default {

  };
</script>
