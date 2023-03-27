<script setup>
import { useUserStore } from "@/stores/account/user.js";

const userStore = useUserStore();
const emit = defineEmits(["login-submit"]);

const onSubmit = () => {
  emit("login-submit");
};
</script>

<template>
  <div class="container-center v p-auto">
    <form @submit.prevent="onSubmit">
      <div class="icon-input">
        <input
          id="login-email"
          class="spak input icon-left"
          type="text"
          placeholder="Email"
          v-model="userStore.data.username"
          required
        />
        <span class="icon is-left">
          <i class="fa-solid fa-at"></i>
        </span>
      </div>
      <div class="icon-input my-1">
        <input
          id="login-pw"
          class="spak input icon-left"
          type="password"
          placeholder="Password"
          v-model="userStore.data.password"
          required
        />
        <span class="icon is-left">
          <i class="fa-solid fa-key"></i>
        </span>
      </div>
      <button type="submit" class="btn color-2">Accedi</button>
    </form>
    <p class="lost-pw">
      <RouterLink class="link-p" to="lost-password">
        Password dimenticata?
      </RouterLink>
    </p>
  </div>
</template>

<style scoped>
form {
  width: 100%;
}
.btn {
  margin: 0.3em auto;
  width: 100%;
  font-weight: 700;
}
.lost-pw {
  width: 100%;
  padding: auto auto auto 0.25em;
}
.link-p {
  font-size: 0.9em;
}
</style>
