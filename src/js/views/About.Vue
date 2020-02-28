<template>
  <div
  @click="preventDefault"
  class="panel panel--level1 bg-dark bg-darkBlue mx-auto h-full flex flex-row justify-center items-center">
    <back-button />

    <div class="panel__content" v-html="about.content"></div>

    <social-block />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import BackButton from '../components/BackButton.vue'
  import SocialBlock from '../components/SocialBlock.vue'

  export default {

    components: {
      BackButton,
      SocialBlock
    },

    data() {
      return {
        isOpen: false
      }
    },

    computed: {
      classObject() {
        return {
          "panel": true,
          "panel--level1": true,
          "background--dark-blue": true,

        }
      },

      ...mapState(['about'])
    },

    methods: {
      preventDefault(event) {
        event.stopPropagation()
      }
    },

    mounted() {
      this.isOpen = true

      if(!this.about.content) {
        axios.get('https://cms.jamie-murphy.com/wp-json/wp/v2/pages/31')
        .then(response => {
          this.$store.commit("setAboutContent", response.data.content.rendered)
        })
        .catch(error => {
          //console.log(error)
        })
      }
    }
  };
</script>
