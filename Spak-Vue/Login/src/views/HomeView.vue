<script setup>
import AuthService from "../services/account/auth.service";
import router from "../router/index";

const Auth = new AuthService();

function logout() {
  Auth.logout();
  router.push({ name: "login" });
}
</script>

<template>
  <h2>HOME</h2>
  <button class="btn" @click="logout()">logout</button>
</template>
