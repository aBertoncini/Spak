import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginPage from "@/views/account/LoginPage.vue";
import RegisterPage from "@/views/account/RegisterPage.vue";
import LostPasswordPage from "@/views/account/LostPasswordPage.vue";
import UserService from "@/services/account/user.service.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "HomePage",
      },
    },
    {
      path: "/account/login",
      name: "login",
      component: LoginPage,
      meta: {
        title: "Login",
      },
    },
    {
      path: "/account/register",
      name: "register",
      component: RegisterPage,
      meta: {
        title: "Registrazione",
      },
    },
    {
      path: "/account/lost-password", //params token
      name: "lost-password",
      component: LostPasswordPage,
      meta: {
        title: "Reimposta Password",
      },
    },
  ],
});

router.beforeEach(async (to, from) => {
  //-- pagine accessibile senza autenticazione
  const publicPages = ["login", "register", "lost-password"];
  //-- controllo se necessaria auth nella pagina to
  const authRequired = !publicPages.includes(to.name);
  //-- check se token già registrato
  var loggedIn = false;
  if (authRequired) {
    loggedIn = await new UserService().isLoggedIn();
  }
  //-- redirect se non autenticato
  if (authRequired && !loggedIn) return { name: "login" };
});

//^ imposto immagine di sfondo per le rotte selezionate
router.beforeEach((to, from) => {
  const bgImgPages = ["login", "register", "lost-password"];
  let app = document.querySelector("body");
  if (bgImgPages.includes(to.name)) {
    if (!app.classList.contains("bg-img")) {
      app.classList.add("bg-img");
    }
  } else {
    app.classList.remove("bg-img");
  }
});

export default router;
