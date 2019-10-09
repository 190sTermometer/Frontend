export default [
  {
    path: "/",
    name: "home",
    view: "Home"
  },
  {
    path: "/login",
    name: "login",
    view: "Login"
  },
  {
    path: "/Info/:id",
    name: "Info",
    props: true,
    view: "Info"
  }
];
