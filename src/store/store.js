import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    unknownDevices: [],
    knownDevices: [],
    currentDevice: null,
    drawer: false,
    title: "",
    theme: "secondary",
    colors: [
      "primary",
      "secondary",
      "tertiary",
      "error",
      "info",
      "success warning"
    ],
    userDetails: null
  },
  mutations: {
    getKnownDevices(state, knownDevices) {
      state.knownDevices = knownDevices;
    },
    getUnknownDevices(state, unknownDevices) {
      state.knownDevices = unknownDevices;
    },
    getDevice(state, device) {
      state.currentDevice = device;
    },
    setDrawer(state, val) {
      state.drawer = val;
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
    },
    addEvent(state, newEvent) {
      state.events.push(newEvent);
    },
    setTheme(state, color) {
      state.theme = color;

      console.log(state.theme);
    },
    setLoggedIn(state, userDetails) {
      var d = new Date();
      d.setTime(d.getTime() + 10 * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie =
        "userDetails=" + userDetails + ";" + expires + ";path=/";
    },
    checkLoggedIn(state) {
      var name = "userDetails=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          state.userDetails = c.substring(name.length, c.length);
          return c.substring(name.length, c.length);
        }
      }
      state.userDetails = null;
      return null;
    }
  },
  actions: {
    getUnknownDevices: ({ commit }) => {},
    getKnownDevices: ({ commit }) => {
      return new Promise(resolve => {
        let data = "";
        // https://fxcixo3b0e.execute-api.us-east-1.amazonaws.com/vibecheck/device
        axios
          .get(
            "https://y6ituq9hnf.execute-api.us-east-1.amazonaws.com/test/device/data?allData=true"
          )
          .then(response => {
            data = response.data.Items.Items;
            commit("getKnownDevices", data);
            resolve(data);
          })
          .catch(error => {
            alert("Rip. Kunde inte ladda databasen - försök igen\n" + error);
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
          })
          .catch(error => {
            alert("Rip. Kunde inte ladda databasen - försök igen\n" + error);
          });
      });
    },
    registerDevice: ({ commit }) => {},
    removeDevice: ({ commit }) => {},
    clearDevice: () => {},
    login: ({ commit }, details) => {
      var username = details.username;
      var password = details.password;

      return new Promise(resolve => {
        let data = "";

        axios
          .get("https://3v3ght50c8.execute-api.us-east-1.amazonaws.com/a1/user")
          .then(response => {
            let userFound = null;

            data = response.data.Item.Items;

            data.forEach(user => {
              if (
                user["användarnamn"] == username &&
                user["lösenord"] == password
              ) {
                userFound = user;
              }
            });

            if (userFound) {
              commit("setLoggedIn", userFound);
            }

            resolve(userFound);
          })
          .catch(error => {
            console.log(
              "Rip. Kunde inte ladda databasen - försök igen\n" + error
            );
          });
      });
    }
  },
  getters: {
    unknownDevices: state => state.unknownDevices,
    knownDevices: state =>
      state.knownDevices.filter(
        i =>
          i.Temperature.length > 3 &&
          i.Temperature.reduce((a, b) => a + b, 0) / i.Temperature.length >
            10 &&
          /^[ -~\t\n\r]+$/.test(i.Name) &&
          !i.Temperature.includes(0)
      ),
    currentDevice: state => state.currentDevice,
    title: state => state.title,
    theme: state => state.theme,
    colors: state => state.colors,
    drawer: state => state.drawer
  }
});
