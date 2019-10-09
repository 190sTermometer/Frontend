export default [
  {
    path: "/",
    name: "Home",
    view: "Home",
    icon: "dashboard"
  },
  {
    path: "/login",
    name: "Login",
    view: "Login",
    icon: "person"
  },
  {
    path: "/info/:name",
    name: "Info",
    props: true,
    view: "Info",
    icon: "description"
  }
];
