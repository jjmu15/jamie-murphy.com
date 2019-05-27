<template>
  <div
  @click="preventDefault"
  class="panel panel--level2 bg-light bg-lightGrey mx-auto h-full flex flex-row justify-center items-center">

    <back-button v-if="layer1.isHidden" />

    <div class="project-content" :style="'background-image: url('+ heroImg +');'">
      <div class="card project-content__info">
        <span class="icon card-link-icon">
          <i class="icofont-external-link"></i>
        </span>
        <h1 class="font-black tracking-wide uppercase mb-2">{{ selectedProject.name }}</h1>
        <p class="uppercase font-bold tracking-wide text-grey text-sm mb-4">{{ selectedProject.role }}</p>

        <p class="mb-3 text-base">{{ selectedProject.description }}</p>

        <p><a class="link text-xs" :href="selectedProject.url">{{ selectedProject.url }}</a></p>
      </div>

      <!-- <img class="project__logo" :src="selectedProject.logo" :alt="selectedProject.name" /> -->
    </div>


  </div>
</template>

<script>
import { mapState } from 'vuex';
import BackButton from '../components/BackButton.vue';

  export default {

    components: {
      BackButton
    },

    computed:{
      heroImg() {
        return this.selectedProject.heroImg;
      },

      ...mapState(['home', 'layer1', 'selectedProject'])
    },

    methods: {
      preventDefault(event) {
        event.stopPropagation();
      }
    }
  };
</script>
