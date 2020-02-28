import Vuex from 'vuex'
import Cookies from 'vue-cookies'


let store = new Vuex.Store({

    state: {
      home: {
        isHidden: false,
        intro: JSON.parse(Cookies.get('jm_home_intro')) || null,
      },
      about: {
        content: JSON.parse(Cookies.get('jm_about_content')) || null
      },
      contact: {
        content: JSON.parse(Cookies.get('jm_contact_content')) || null
      },
      layer1: {
        isHidden: false,
        overlay: false
      },
      selectedProject: null,
      projects: [
        {
          id: '01',
          color: 'orange',
          name: 'Polkadot Tiger',
          role: 'Cofounder',
          technologies: "Laravel, Vuejs, Segment.io, Tailwind CSS",
          url: 'www.polkadottiger.com',
          logo: '/img/polkadot-logo-main.png',
          heroImg: '/img/polkadot-tiger.png',
          wideImg: '',
          isTCM: false,
          routeName: 'pdt',
          shortDesc: 'Metadata A/B Testing. Take out the guesswork of creating highly optimized and effective SEO Metadata with Polka Dot Tiger.',
          description: "Under construction and launching in the very near future. Sign up to the mailing list on the Polkadot Tiger website to get notified when available.",
        },
        {
          id: '02',
          color: 'green',
          name: 'TheCONTENTBible',
          role: 'Developer',
          technologies: "Youtube API, WordPress",
          url: 'www.thecontentbible.com',
          logo: '/img/the_content_bible_logo.png',
          isTCM: false,
          heroImg: '/img/the-content-bible.png',
          wideImg: '',
          routeName: 'thecontentbible',
          shortDesc: 'Built for TheLADBible to provide a video licensing platform powered by the YouTube API and integrated with WordPress.',
          description: "TheLADBible needed a video licensing platform to allow potential buyers a quick &amp; effective way to search &amp; filter videos. The YouTube API powers the videos while creating SEO friendly content within WordPress via a custom integration to port over meta data and video tags, categories & descriptions.",
        },
        {
          id: '03',
          color: 'purple',
          name: 'Whisky Me',
          role: 'Architect & Lead Developer',
          technologies: "Laravel",
          url: 'www.whisky-me.com',
          logo: '/img/whisky-me__logo.png',
          isTCM: true,
          heroImg: '/img/whisky-me.png',
          wideImg: '',
          routeName: 'whiskyme',
          shortDesc: 'Whisky Me needed a new platform to automate many of the online processes for their monthly Whisky delivery service in the UK.',
          description: "Whisky me needed an automated online platform to make signups for their customers easier and to provide unique &amp; exclusive content to their subscribers via the members area.",
        }
      ]

    },

    // functions to update app state
    mutations: {
      toggleHomeHidden(state) {
        state.home.isHidden = !state.home.isHidden;
      },
      toggleLayer1(state) {
        state.layer1.isHidden = !state.layer1.isHidden;
      },
      toggleLayer1Overlay(state) {
        state.layer1.overlay = !state.layer1.overlay;
      },
      setSelectedProject(state, project) {
        state.selectedProject = project;
      },
      setHomepageIntro(state, intro) {
        Cookies.set('jm_home_intro', JSON.stringify(intro));
        state.home.intro = intro;
      },
      setAboutContent(state, content) {
        Cookies.get('jm_about_content', JSON.stringify(content));
        state.about.content = content;
      },
      setContactContent(state, content) {
        Cookies.get('jm_contact_content', JSON.stringify(content));
        state.contact.content = content;
      }
    },

    getters: {


    },

    actions: {

    }
})

export default store
