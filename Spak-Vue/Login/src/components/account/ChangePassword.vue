<script setup>
import { onMounted, ref, watch } from "vue";
import { useUserStore } from "@/stores/account/user.js";

const token = ref("");

onMounted(() => {
  token.value = sessionStorage.getItem("reset-pw-token");
});

const userStore = useUserStore();

const register = ref({
  password: "",
  confirmPassword: "",
});

const regex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,16}$/;
var regexRes = false;
const showTxtErr = ref(false);

watch(
  () => register.value.password.match(regex),
  (res) => {
    regexRes = res !== null ? true : false;
  }
);

function onSubmit() {
  if (register.value.password === register.value.confirmPassword && regexRes) {
    userStore.changePassword(register.value.password, token.value);
  } else {
    showTxtErr.value = true;
  }
}
</script>

<template>
  <div id="register-container" class="container-center v p-auto">
    <form id="register-form" @submit.prevent="onSubmit">
      <div class="icon-input">
        <label for="register-password" class="txt-label">Nuova Password</label>
        <input
          id="register-password"
          class="spak input icon-left icon-right"
          :class="{
            correct: regexRes,
            wrong: !regexRes && register.password !== '',
          }"
          type="password"
          placeholder="Password"
          v-model="register.password"
          required
        />
        <span class="icon is-left">
          <i class="fa-solid fa-key"></i>
        </span>
        <span class="icon is-right">
          <i v-if="regexRes" class="fa-solid fa-check"></i>
          <i
            v-else-if="!regexRes && register.password !== ''"
            class="fa-solid fa-xmark"
          ></i>
        </span>
      </div>
      <div class="icon-input">
        <label for="register-password" class="txt-label">
          Conferma Nuova Password
        </label>
        <input
          id="confirm-password"
          class="spak input icon-right icon-left"
          type="password"
          placeholder="Conferma Password"
          v-model.lazy="register.confirmPassword"
          required
        />
        <span class="icon is-left">
          <i class="fa-solid fa-key"></i>
        </span>
      </div>
      <p class="info-input">
        La password deve essere compresa tra 8-16 caratteri, contenere
        maiuscole, minuscole, numeri, e caratteri speciali (!,$,&...)
      </p>
      <button id="submit" type="submit" class="btn color-2">Conferma</button>
      <div v-if="showTxtErr" class="txt-s txt-err">
        Password non valida o non coincide
      </div>
    </form>
  </div>
</template>

<style scoped>
.spak input {
  margin: 0.3em auto;
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
