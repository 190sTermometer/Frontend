import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    unknownDevices: [],
    knownDevices: [],
    currentDevice: null
  },
  mutations: {
    // Call local with commit()
    getKnownDevices(state, knownDevices) {
      state.knownDevices = knownDevices;
    },
    getUnknownDevices(state, unknownDevices) {
      state.knownDevices = unknownDevices;
    },
    getDevice(state, device) {
      state.currentDevice = device;
    },
    removeDevice(state, macAddress) {
      let knownDevices = state.knownDevices,
        findDevice = knownDevices.find(
          device => device.macAddress === macAddress
        ),
        deviceIndex = knownDevices.indexOf(findDevice);

      knownDevices.splice(deviceIndex, 1);
      state.knownDevices = knownDevices;
    },
    registerDevice(state, newDevice) {
      let knownDevices = state.knownDevices;
      knownDevices.push(newDevice);

      let unknownDevices = state.unknownDevices;
      let deviceIndex = knownDevices.indexOf(newDevice);

      unknownDevices.splice(deviceIndex, 1);
      state.unknownDevices = unknownDevices;
      state.knownDevices = knownDevices;
    }
  },
  actions: {
    // Call with dispatch() from another file
    // Use commit to call local method / mutation
    getUnknownDevices: ({ commit }) => {},
    getKnownDevices: ({ commit }) => {
      return new Promise(resolve => {
        let data = "";

        axios
          .get(
            "https://y6ituq9hnf.execute-api.us-east-1.amazonaws.com/test/device/data?allData=true"
          )
          .then(response => {
            data = response.data.Items.Items;
            commit("getKnownDevices", data);
            resolve(data);
          });
      });
    },
    getDevice: ({ commit }, macAddress) => {
      return new Promise(resolve => {
        let data = "";

        axios
          .get(
            "https://y6ituq9hnf.execute-api.us-east-1.amazonaws.com/test/device/data?name=" +
              macAddress
          )
          .then(response => {
            data = response.data.data;
            commit("getDevice", data);
            resolve(data);
          });
      });
    },
    registerDevice: ({ commit }) => {},
    removeDevice: ({ commit }) => {},
    clearDevice: ({ commit }) => {}
  },
  getters: {
    unknownDevices: state => state.unknownDevices,
    knownDevices: state => state.knownDevices,
    currentDevice: state => state.currentDevice
  }
});
