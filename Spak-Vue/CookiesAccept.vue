<script setup>
import { ref, onMounted } from "vue";

const cookie = ref({ accepted: true });

function checkCookie(cname) {
  let cvalue = getCookie(cname);
  if (cvalue != "") {
    return true;
  } else {
    return false;
  }
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function acceptCookies() {
  setCookie("acceptCookie", true, 365);
  cookie.value.accepted = true;
}

onMounted(() => {
  cookie.value.accepted = checkCookie("acceptCookie");
});
</script>

<template>
  <Transition>
    <div v-if="!cookie.accepted" class="cookie-container">
      <div class="cookie-txt">Questo sito utilizza i cookie</div>
      <div class="cookie-btn-container">
        <button @click="acceptCookies" class="cookie-btn">ACCETTA</button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.cookie-container {
  display: flex;
  align-items: center;
  padding: 0.7rem 1rem;
  border-radius: 40px;
  font-size: 0.75rem;
  background-color: #000;
  color: #fff;
  line-height: 160%;
  position: fixed;
  bottom: 1%;
  right: 2%;
  max-width: -webkit-max-content;
  max-width: -moz-max-content;
  max-width: max-content;
  z-index: 100;
}
.cookie-btn-container {
  margin-left: 1rem;
}
.cookie-btn {
  display: block;
  margin: auto;
  text-transform: uppercase;
  font-size: 0.875rem;
  border: 1px solid #fff;
  border-radius: 20px;
  background-color: #000;
  color: #fff;
  padding: 0.5rem 1rem;
  transition: all 0.4s;
}
.cookie-btn:hover,
.cookie-btn:active,
.cookie-btn:focus {
  color: #000;
  background-color: #fff;
}
</style>
