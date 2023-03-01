<script setup>
import { ref, onMounted } from "vue";

const offCanvasMenu = ref(null);
const isShow = ref(false);

function open() {
  offCanvasMenu.value.style.width = "100%";
  isShow.value = true;
  bodyOverflow(isShow.value);
  offCanvasMenu.value.ontransitionend;
}
function close() {
  offCanvasMenu.value.style.width = "0%";
  isShow.value = false;
  bodyOverflow(isShow.value);
}

function bodyOverflow(isShow) {
  document.querySelector("body").style.overflow = isShow ? "hidden" : "";
}

onMounted(() => {
  bodyOverflow(isShow.value);
});

defineExpose({
  open,
  close,
  isShow,
});
</script>

<template>
  <div id="offCanvasMenu" ref="offCanvasMenu" class="overlay">
    <div class="closebtn"><i class="bi bi-x" @click="close"></i></div>
    <div class="overlay-body">
      <div class="overlay-content">
        <slot name="content"></slot>
      </div>
      <div class="overlay-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/Spak-scss/colors";
.overlay {
  //height: 100%;
  //max-height: 100vh;
  width: 0;
  position: fixed;
  display: block;
  z-index: 1;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: $secondary;
  background-color: rgba($secondary, 0.9);
  overflow-x: hidden;
  transition: 0.5s;
  color: lighten($primary-text, 20%);
  //padding-bottom: 5em;
}
.closebtn {
  font-size: 2.2rem;
  text-align: right;
  padding: 0.5em 0.5em 0 0;
  color: lighten($primary-text, 20%);
  i {
    cursor: pointer;
  }
}

.overlay-body {
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  min-height: 100%;
  justify-content: space-between;
  padding: 0 0 20% 0;
}

.overlay-content {
  margin: 1.5em 1em;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  //align-items: center;
  gap: 1.7em;
}

.overlay-footer {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  margin: 2.5em 1em;
}
</style>
