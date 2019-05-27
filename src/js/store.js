import Vuex from 'vuex';


let store = new Vuex.Store({

    state: {
      home: {
        isHidden: false
      },
      layer1: {
        isHidden: false,
        overlay: false
      },
      projects: [
        {
          id: '01',
          color: 'orange',
          name: 'Polkadot Tiger',
          role: 'Cofounder',
          technologies: "Laravel, Vuejs",
          url: 'https://www.polkadottiger.com',
          logo: '',
          heroImg: '',
          wideImg: '',
          routeName: 'pdt',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.",
        },
        {
          id: '02',
          color: 'green',
          name: 'TheCONTENTBible',
          role: 'Developer',
          technologies: "Youtube API, WordPress",
          url: 'https://www.thecontentbible.com',
          logo: '',
          heroImg: '',
          wideImg: '',
          routeName: 'thecontentbible',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.",
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
      }
    },

    getters: {


    },

    actions: {

    }
});

export default store;
