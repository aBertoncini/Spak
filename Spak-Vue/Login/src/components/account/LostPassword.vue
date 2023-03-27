<script setup>
import { ref, watch } from "vue";
import { useUserStore } from "@/stores/account/user.js";

const emit = defineEmits([]);

const register = ref({
  username: "",
  password: "",
});

const userStore = useUserStore();

const regex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,16}$/;
var regexRes = false;

watch(
  () => register.value.password.match(regex),
  (res) => {
    regexRes = res !== null ? true : false;
  }
);

function onEmailSubmit() {
  userStore.changePasswordReq()
}
</script>

<template>
  <div id="register-container" class="container-center v p-auto">
    <form id="register-form" @submit.prevent="onEmailSubmit">
      <div class="icon-input">
        <label for="email" class="txt-label">Email</label>
        <input
          id="email"
          class="spak input icon-left"
          type="email"
          placeholder="Email"
          v-model="userStore.data.username"
          required
        />
        <span class="icon is-left">
          <i class="fa-solid fa-at"></i>
        </span>
      </div>
      <button id="submit" type="submit" class="btn color-2">
        Continua <i class="fa-solid fa-arrow-right"></i>
      </button>
    </form>
  </div>
</template>

<style scoped>
.spak input {
  margin: 0.3em auto;
}
.icon-input:nth-child(2) {
  margin: 1.2em 0 0 0;
}
.btn {
  margin: 0.3em auto;
  width: 100%;
  font-weight: 700;
}
form {
  width: 100%;
}
</style>
