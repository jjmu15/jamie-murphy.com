<template>
  <div
  @click="preventDefault"
  class="panel panel--level1 bg-light bg-yellow mx-auto h-full flex flex-row justify-center items-center">
    <back-button />

    <div class="panel__content panel__content--no-underline" v-html="contact.content"></div>

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

      ...mapState(['contact'])
    },

    methods: {
      preventDefault(event) {
        event.stopPropagation()
      }
    },

    mounted() {
      this.isOpen = true

      if(!this.contact.content) {
        axios.get('https://cms.jamie-murphy.com/wp-json/wp/v2/pages/33')
        .then(response => {
          this.$store.commit("setContactContent", response.data.content.rendered)
        })
        .catch(error => {
          //console.log(error)
        })
      }

    }
  }
</script>
