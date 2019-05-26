<template>
  <div class="social-links flex flex-row justify-center">
    <div class="social-item ">
      <div class="icon mx-2" v-tooltip="'Buy me a coffee'" @click="openCoffeeLink">
  			<i class="icofont-coffee-alt" />
  		</div>
    </div>

      <div class="social-item">
        <div class="icon mx-2" v-tooltip="'See what I see'">
          <i class="icofont-instagram" />
        </div>
      </div>

      <div class="social-item">
        <div class="icon mx-2" v-tooltip="'Follow me on Twitter'">
          <i class="icofont-twitter" />
        </div>
      </div>

      <div class="social-item">
        <div class="icon mx-2" v-tooltip="'Check out what I listen to while working'">
          <i class="icofont-brand-lastfm" />
        </div>
      </div>
  </div>
</template>

<script>

export default {

  methods: {
    openCoffeeLink() {
      window.open('https://www.buymeacoffee.com/jjmu15', '_blank');
    },

    openIGLink() {
      window.open('https://www.instagram.com/jjmu15', '_blank');
    },

    openLastFMLink() {
      window.open('https://www.last.fm/user/jjmu15', '_blank');
    },

    openTwitterLink() {
      window.open('https://www.twitter.com/jjmu15', '_blank');
    }
  }
};
</script>
