import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

import bcrypt from "bcrypt";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "",
    username: localStorage.getItem("username") || "",

    unknownDevices: [],
    knownDevices: [],
    currentDevice: null,
    drawer: false,
    title: "",
    search: "",
    theme: "secondary",
    colors: [
      "primary",
      "secondary",
      "tertiary",
      "error",
      "info",
      "success warning"
    ],
    mode: "grey darken-3",
    modes: [
      "grey darken-3", // Darkmode
      "grey lighten-5" // Lightmode
    ]
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
    setTheme(state, color) {
      state.theme = color;
    },
    setMode(state, mode) {
      state.mode = mode;
    },
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, username) {
      state.status = "success";
      state.username = username;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.username = "";
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
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios
          .get("https://3v3ght50c8.execute-api.us-east-1.amazonaws.com/a1/user")
          .then(resp => {
            let currentUser = null;

            resp = resp.data.Item.Items;
            resp.forEach(u => {
              if (
                u["användarnamn"] == user.username &&
                u["lösenord"] == user.password
              ) {
                currentUser = u;
              }
            });

            if (currentUser != null) {
              const username = currentUser["användarnamn"];

              localStorage.setItem("username", username);

              commit("auth_success", username);
              resolve(resp);
            } else {
              commit("auth_error");
              localStorage.removeItem("username");
              reject("Wrong password");
            }
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios
          .post(
            "https://3v3ght50c8.execute-api.us-east-1.amazonaws.com/a1/user",
            user
          )
          .then(resp => {
            /*
            https://www.npmjs.com/package/bcrypt

            bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
              // Store hash in your password DB.
            });

            */

            if (resp.data.errorMessage == null) {
              const username = user["användarnamn"];
              localStorage.setItem("username", username);
              commit("auth_success", username);
              resolve(resp);
            } else {
              commit("auth_error", "Error nop");
              localStorage.removeItem("username");
              reject("ERRORR");
            }
          })
          .catch(err => {
            commit("auth_error", err);
            localStorage.removeItem("username");
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit("logout");
        localStorage.removeItem("username");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
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
    mode: state => state.mode,
    modes: state => state.modes,
    drawer: state => state.drawer,
    isLoggedIn: state => !!state.username,
    authStatus: state => state.status,
    username: state => state.username,
    search: state => state.search
  }
});
