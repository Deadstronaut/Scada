import Vue from "vue";
var _ = require("lodash");
const state = {
  alarmlist: [],
  virtualdevices: {},
  constants: {},
  workers: {}
};

const mutations = {
  WorkerChanged(state, payload) {
    if (payload.status === "deleted") {
      Vue.delete(state.workers, payload.uniquename);
    } else {
      Vue.set(state.workers, payload.uniquename, payload);
    }
  },
  VDChanged(state, payload) {
    if (state.virtualdevices[payload.virtualdevice] === undefined) {
      Vue.set(state.virtualdevices, payload.virtualdevice, {});
    }

    if (
      state.virtualdevices[payload.virtualdevice][payload.property] ===
      undefined
    ) {
      Vue.set(
        state.virtualdevices[payload.virtualdevice],
        payload.property,
        {}
      );
    }
    Vue.set(
      state.virtualdevices[payload.virtualdevice],
      payload.property,
      payload.message
    );
  },
  ConstantReceived(state, payload) {
    if (state.constants[payload.virtualdevice] === undefined) {
      Vue.set(state.constants, payload.virtualdevice, {});
    }

    if (
      state.constants[payload.virtualdevice][payload.property] === undefined
    ) {
      Vue.set(state.constants[payload.virtualdevice], payload.property, {});
    }
    Vue.set(
      state.constants[payload.virtualdevice],
      payload.property,
      payload.message.Value
    );
    Vue.set(
      state.constants[payload.virtualdevice],
      "DeviceAddress",
      payload.virtualdevice
    );
  },
  AlarmReceived(state, payload) {
    if (
      state.alarmlist.some(item => item.deviceaddress == payload.deviceaddress)
    ) {
      state.alarmlist = state.alarmlist.map(item => {
        if (item.deviceaddress === payload.deviceaddress) {
          return Object.assign({}, item, payload);
        }
        return item;
      });
    } else {
      state.alarmlist.push(payload);
    }
  }
};

const actions = {};

const getters = {
  getAllWorkers: state => {
    return state.workers;
  },
  getConstantValue: state => address => {
    return state.constants[address];
  },
  getAllConstantValue: state => {
    return _.groupBy(state.constants, function(item) {
      return item.GroupName;
    });
  },
  bindToVD: state => address => {
    return state.virtualdevices[address];
  },
  getAlarmList: state => {
    return state.alarmlist;
  },
  getDeviceAlarmList: state => {
    return _.groupBy(state.alarmlist, function(item) {
      return item.deviceaddress;
    });
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
