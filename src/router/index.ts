import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import StartPage from "../views/StartPage.vue";
import BooksPage from "../views/BooksPage.vue";
import NotFoundPage from "../components/NotFound.vue";


const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "start",
        component: StartPage,
    },
    {
        path: "/books",
        name: "books",
        component: BooksPage,
    },
    {
        path: '/:pathMatch(.*)*',
        name: "NotFound",
        component: NotFoundPage,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
