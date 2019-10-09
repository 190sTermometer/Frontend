export default [
  {
    path: "/",
    name: "home",
    view: "Home",
    icon: "dashboard"
  },
  {
    path: "/login",
    name: "login",
    view: "Login",
    icon: "person"
  },
  {
    path: "/Info/:name",
    name: "Info",
    props: true,
    view: "Info",
    icon: "description"
  }
];
