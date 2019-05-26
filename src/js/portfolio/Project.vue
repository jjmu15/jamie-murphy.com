<template>
  <div
  @click="preventDefault"
  class="panel panel--level2 bg-dark bg-orange mx-auto h-full flex flex-row justify-center items-center">
    <h1>Portfolio Project Item</h1>


  </div>
</template>

<script>

  export default {

    methods: {
      preventDefault(event) {
        event.stopPropagation();
      }
    }
  };
</script>
