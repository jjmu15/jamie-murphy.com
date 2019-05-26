import Vuex from 'vuex';


let store = new Vuex.Store({

    state: {
      home: {
        isHidden: false
      },
      layer1: {
        isHidden: false
      }
    },

    // functions to update app state
    mutations: {
      toggleHomeHidden(state) {
        state.home.isHidden = !state.home.isHidden;
      },
      toggleLayer1(state) {
        state.layer1.isHidden = !state.layer1.isHidden;
      }
    },

    getters: {


    },

    actions: {

    }
});

export default store;
