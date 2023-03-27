<script setup>
import { ref, watch } from "vue";
import { useUserStore } from "@/stores/account/user.js";

const emit = defineEmits(["registerSubmit"]);

const register = ref({
  email: "",
  password: "",
  confirmPassword: "",
});

const userStore = useUserStore();

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
    userStore.data.username = register.value.email;
    userStore.data.password = register.value.password;
    emit("registerSubmit");
  } else {
    showTxtErr.value = true;
  }
}
</script>

<template>
  <div id="register-container" class="container-center v p-auto">
    <form id="register-form" @submit.prevent="onSubmit">
      <div class="icon-input">
        <label for="register-email" class="txt-label">Email</label>
        <input
          id="register-email"
          class="spak input icon-left"
          type="text"
          placeholder="Email"
          v-model="register.email"
          required
        />
        <span class="icon is-left">
          <i class="fa-solid fa-at"></i>
        </span>
      </div>
      <div class="icon-input">
        <label for="register-password" class="txt-label">Password</label>
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
      <div class="icon-input my-1">
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
      <button id="submit" type="submit" class="btn color-2">
        Continua <i class="fa-solid fa-arrow-right"></i>
      </button>
      <div v-if="showTxtErr" class="txt-s txt-err">
        Password non valida o non coincide
      </div>
    </form>
  </div>
</template>

<style scoped>
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
.txt-err {
  color: red;
}
</style>
