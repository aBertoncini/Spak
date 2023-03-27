<script setup>
import { ref, onMounted } from "vue";
import Login from "@/components/account/Login.vue";
import AccountForm from "@/components/account/AccountForm.vue";
import { useUserStore } from "@/stores/account/user.js";

onMounted(() => {
  userStore.reset();
});

const userStore = useUserStore();

const show = ref({
  loginErr: false,
});

async function loginSubmit() {
  let res = await userStore.login();
  if (!res.success) show.value.loginErr = true;
}
</script>

<template>
  <div class="container-center h-100vh">
    <AccountForm>
      <template v-slot:content>
        <Login @login-submit="loginSubmit"></Login>
        <div v-if="show.loginErr" class="txt-s login-err">
          Accesso non consentito! Email o password errati
        </div>
      </template>
      <template v-slot:footer>
        <p>
          Non hai un account?
          <RouterLink class="link-p" to="register">Registrati</RouterLink>
        </p>
      </template>
    </AccountForm>
  </div>
</template>

<style scoped>
.login-err {
  color: red;
}
</style>
