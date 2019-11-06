export default [
  {
    path: "/",
    name: "Home",
    view: "Home",
    icon: "dashboard",
    visible: true
  },
  {
    path: "/login",
    name: "Login",
    view: "Login",
    icon: "person",
    visible: true,
    login: false
  },
  {
    path: "/register",
    name: "Register",
    view: "Register",
    icon: "person",
    visible: true,
    login: false
  },
  {
    path: "/User",
    name: "Användare",
    view: "User",
    icon: "person",
    visible: true,
    login: true
  },
  {
    path: "/info/:name",
    name: "Info",
    props: true,
    view: "Info",
    icon: "description",
    visible: false
  }
];
