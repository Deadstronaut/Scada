const state = {
  viewDeviceList: []
};

const mutations = {
  updateShownView(state, payload) {
    state.viewDeviceList = payload;
  }
};

const actions = {
  updateShownView({ commit }, payload) {
    commit("updateShownView", payload);
  }
};

const getters = {
  viewsShown: state => {
    return state.viewDeviceList;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
