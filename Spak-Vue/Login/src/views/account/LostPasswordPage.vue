<script setup>
import AccountForm from "@/components/account/AccountForm.vue";
import LostPassword from "@/components/account/LostPassword.vue";
import ChangePassword from "@/components/account/ChangePassword.vue";
import { onMounted, ref } from "vue";
import router from "@/router/index.js";

const isTokenPresent = ref(false);

function getToken() {
  const token = router.currentRoute.value.query.token;
  sessionStorage.setItem("reset-pw-token", token);
  if (token !== undefined) isTokenPresent.value = true;
}

onMounted(() => {
  getToken();
});
</script>

<template>
  <div class="container-center card-container h-100vh">
    <AccountForm v-if="!isTokenPresent">
      <template v-slot:content>
        <div class="header-title">Reimposta la password</div>
        <LostPassword></LostPassword>
      </template>
      <template v-slot:footer>
        <p>
          Password trovata? effettua il
          <RouterLink class="link-p" :to="{ name: 'login' }">Log In</RouterLink>
        </p>
      </template>
    </AccountForm>
    <AccountForm v-else>
      <template v-slot:content>
        <div class="header-title">Reimposta la password</div>
        <ChangePassword></ChangePassword>
      </template>
    </AccountForm>
  </div>
</template>

<style scoped>
.header-title {
  font-size: 1.5em;
  font-weight: 700;
  margin-bottom: 0.6em;
}
</style>
