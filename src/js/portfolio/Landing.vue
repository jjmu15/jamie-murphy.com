<template>
  <div
  @click="goToLayer1"
  :class="layer1Classes">
    <back-button />

    <div :class="overlayClasses">
      <div class="portfolio-list flex flex-col">
        <div :class="projectItemClasses" v-for="project in projects" @click="goToProject(project, $event)">
          <div class="project-overlay" :data-color="project.color">
            &nbsp;
          </div>

          <img v-if="project.isTCM" class="tcm-attrib" v-tooltip="'This project was completed whilst I was working as Technical Director for The Constant Media'" src="/img/tcm-logo.jpg" alt="Built while working for The Constant Media" />

          <div class="portfolio-list__item__content">
            <p class="light-text font-sans uppercase tracking-wide mb-2">{{ project.id }} -</p>
            <h2 class="mb-1 text-xl font-black">{{ project.name }}</h2>
            <p class="item__category font-sans text-sm font-bold uppercase tracking-wider mb-2">{{ project.role }}</p>
            <p class="text-lg item__short-desc">{{ project.shortDesc }}</p>
          </div>
        </div>
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

      projectItemClasses(test) {
        return {
            'portfolio-list__item': true,
            'flex': true,
            'flex-col': true,
            'items-start': true,
            'justify-end': true,
            'pb-5': true,
            "bg-${color}": true,
        }
      },

      overlayClasses() {
        return {
            'overlay': true,
            'overlay--active': this.layer1.overlay
        }
      },

      ...mapState(['home', 'layer1', 'projects'])
    },

    methods: {
      goToLayer1(event) {
        event.stopPropagation();

        if(this.layer1.isHidden) {
          this.$store.commit('toggleLayer1');
          this.$store.commit('toggleLayer1Overlay');
          this.$router.push('/portfolio');
        }
      },

      goToProject(project, event) {
        event.stopPropagation();

        if(this.layer1.isHidden) {
          this.$store.commit('toggleLayer1');
          this.$store.commit('toggleLayer1Overlay');
          this.$router.push('/portfolio');
        } else {
          this.$store.commit('setSelectedProject', project);
          this.$store.commit('toggleLayer1');
          this.$store.commit('toggleLayer1Overlay');
          this.$router.push({ name: project.routeName });
        }


      },

      goContentBible() {
        event.stopPropagation();

        if(this.layer1.isHidden) {
          this.$store.commit('toggleLayer1');
          this.$store.commit('toggleLayer1Overlay');
          this.$router.push('/portfolio');
        } else {
          this.$store.commit('toggleLayer1');
          this.$store.commit('toggleLayer1Overlay');
          this.$router.push({name: "thecontentbible"});
        }
      },

      goPDT() {
        event.stopPropagation();

        if(this.layer1.isHidden) {
          this.$store.commit('toggleLayer1');
          this.$store.commit('toggleLayer1Overlay');
          this.$router.push('/portfolio');
        } else {
          this.$store.commit('toggleLayer1');
          this.$store.commit('toggleLayer1Overlay');
          this.$router.push({name: "pdt"});
        }
      }
    }

  };
</script>
