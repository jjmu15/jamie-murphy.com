<template>
  <div
  @click="preventDefault"
  class="panel panel--level2 bg-light bg-lightGrey mx-auto h-full flex flex-row justify-center items-center">

    <back-button v-if="layer1.isHidden" />

    <div class="project-content">
      <div class="card project-content__info">
        <span class="icon card-link-icon">
          <i class="icofont-external-link"></i>
        </span>
        <h1 class="font-black tracking-wide uppercase mb-2">Project Title</h1>
        <p class="uppercase font-bold tracking-wide text-grey text-sm mb-4">Laravel, Vuejs</p>

        <p class="mb-3 text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.</p>

        <p><a class="link text-xs" href="https://www.website.com">www.website.com</a></p>
      </div>
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

      ...mapState(['home', 'layer1'])
    },

    methods: {
      preventDefault(event) {
        event.stopPropagation();
      }
    }
  };
</script>
