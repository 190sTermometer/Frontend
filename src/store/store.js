import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

import bcrypt from "bcryptjs";

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
      "primary", // Blå
      "secondary", // Grön
      "tertiary", // Grå
      "error", // Röd
      "info", // Ljusblå
      "success warning" // Orange
    ],
    mode: "grey darken-3",
    modes: [
      "grey darken-3", // Darkmode
      "grey lighten-5" // Lightmode
    ],
    olle: "https://randomuser.me/api/portraits/men/56.jpg",
    olleBilder: [
      "https://randomuser.me/api/portraits/men/54.jpg",
      "https://randomuser.me/api/portraits/men/55.jpg",
      "https://randomuser.me/api/portraits/men/56.jpg",
      "https://randomuser.me/api/portraits/men/57.jpg",
      "https://randomuser.me/api/portraits/men/58.jpg",
      "https://randomuser.me/api/portraits/women/54.jpg",
      "https://randomuser.me/api/portraits/women/55.jpg",
      "https://randomuser.me/api/portraits/women/56.jpg",
      "https://randomuser.me/api/portraits/women/57.jpg",
      "https://randomuser.me/api/portraits/women/58.jpg"
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
    setProfilePicture(state, url) {
      state.olle = url;
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
    olleFunc(state, o) {
      state.olle = o;
      console.log(o);
      console.log(state.olle);
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
    getUnknownDevices: () => {},
    getKnownDevices: ({ commit }) => {
      return new Promise(resolve => {
        let data = "";
        // https://fxcixo3b0e.execute-api.us-east-1.amazonaws.com/vibecheck/device
        axios
          .get(
            "https://fxcixo3b0e.execute-api.us-east-1.amazonaws.com/vibecheck/device"
          )
          .then(response => {
            data = response.data.Items.Items;
            console.log(data);
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
            "https://y6ituq9hnf.execute-api.us-east-1.amazonaws.com/test/device/data?mac=" +
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
    login({ commit }, clientUser) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios
          .get("https://3v3ght50c8.execute-api.us-east-1.amazonaws.com/a1/user")
          .then(resp => {
            let userFound = false;

            resp = resp.data.Item.Items;
            resp.forEach(serverUser => {
              if (
                serverUser.username == clientUser.username &&
                serverUser.password == clientUser.password
              ) {
                userFound = true;
              }
            });

            if (userFound == true) {
              localStorage.setItem("username", clientUser.username);

              commit("auth_success", clientUser.username);
              resolve("Logged in");
            } else {
              localStorage.removeItem("username");

              commit("auth_error");
              reject("Wrong password (¬_¬ )");
            }
          })
          .catch(() => {
            reject("Error try again");
          });
      });
    },
    register({ commit }, clientUser) {
      return new Promise((resolve, reject) => {
        bcrypt.hash(clientUser.password, 10, (err, hash) => {
          clientUser.password = hash;
        });

        commit("auth_request");
        axios
          .post(
            "https://3v3ght50c8.execute-api.us-east-1.amazonaws.com/a1/user",
            { namn: clientUser.username, password: clientUser.password }
          )
          .then(resp => {
            if (resp.data.errorMessage == null) {
              localStorage.setItem("username", clientUser.username);

              commit("auth_success", clientUser.username);
              resolve("Logged in");
            } else {
              localStorage.removeItem("username");

              commit("auth_error");
              reject("Try again");
            }
          })
          .catch(e => {
            localStorage.removeItem("username");

            commit("auth_error");
            reject("Try again - " + e);
          });
      });
    },
    logout({ commit }) {
      return new Promise(resolve => {
        localStorage.removeItem("username");

        commit("logout");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    }
  },
  getters: {
    unknownDevices: state => state.unknownDevices,
    knownDevices: state => state.knownDevices,
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
    search: state => state.search,
    olleBilder: state => state.olleBilder,
    olle: state => state.olle
  }
});
