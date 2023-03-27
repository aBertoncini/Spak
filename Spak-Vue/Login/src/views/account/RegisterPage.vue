<script setup>
import { ref } from "vue";
import Register from "@/components/account/Register.vue";
import AccountForm from "@/components/account/AccountForm.vue";
import CompleteAccount from "@/components/account/CompleteAccount.vue";
import { useUserStore } from "@/stores/account/user.js";

const state = ref(0);
const transitionName = ref("slide-register");
const userStore = useUserStore();

function submitRegister() {
  state.value = 1;
  transitionName.value = "slide-register";
}

function backToRegister() {
  state.value = 0;
  transitionName.value = "slide-compile";
}

function submitCompile() {
  userStore.register();
}
</script>

<template>
  <div class="container-center card-container h-100vh">
    <Transition :name="transitionName">
      <div class="component" v-if="state === 0">
        <AccountForm>
          <template v-slot:content>
            <Register @register-submit="submitRegister"></Register>
          </template>
          <template v-slot:footer>
            <p>
              Sei già registrato? effettua il
              <RouterLink class="link-p" to="login">Log In</RouterLink>
            </p>
          </template>
        </AccountForm>
      </div>
      <div v-else-if="state === 1">
        <AccountForm>
          <template v-slot:content>
            <div class="txt-big strong">
              <strong>Completa il tuo account</strong>
            </div>
            <CompleteAccount @submit="submitCompile"></CompleteAccount>
          </template>
          <template v-slot:footer>
            <p>
              <i class="fa-solid fa-arrow-left"></i> Cambia
              <a role="button" class="link-p" @click="backToRegister">
                Email o Password
              </a>
            </p>
          </template>
        </AccountForm>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.card-container {
  overflow: hidden;
}

.component {
  position: absolute;
}

.slide-register-enter-active,
.slide-register-leave-active,
.slide-compile-enter-active,
.slide-compile-leave-active {
  transition: all 0.5s ease-out;
}

.slide-register-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.slide-register-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-compile-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-compile-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
