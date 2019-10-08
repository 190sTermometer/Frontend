export default [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/Home.vue")
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/Login.vue")
    },
    {
        path: "/Info/:id",
        name: "Info",
        props: true,
        component: () => import("@/views/Info.vue")
    }
];
