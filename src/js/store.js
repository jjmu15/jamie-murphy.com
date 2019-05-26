import Vuex from 'vuex';


let store = new Vuex.Store({

    state: {
      home: {
        isHidden: false
      }
    },

    // functions to update app state
    mutations: {
      toggleHomeHidden(state) {
        state.home.isHidden = !state.home.isHidden;
      }
    },

    getters: {


    },

    actions: {

    }
});

export default store;
