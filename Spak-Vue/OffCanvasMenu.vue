<script setup>
//import { ref, onMounted } from "vue";

const props = defineProps({
  rightEntrance: Boolean, //true, false
  maxWidth: String, //100%
});

const emit = defineEmits(["after-open", "after-close"]);

const offCanvasMenu = ref(null);
const isShow = ref(false);

function open() {
  isShow.value = true;
  emit("after-open");
}
function close() {
  isShow.value = false;
  emit("after-close");
}

const enterClass = ref(
  `animate__animated ${
    props.rightEntrance ? "animate__slideInRight" : "animate__slideInLeft"
  }`
);
const leaveClass = ref(
  `animate__animated ${
    props.rightEntrance ? "animate__slideOutRight" : "animate__slideOutLeft"
  }`
);
const overlayStyle = computed(() => {
  let st = {
    width: props.maxWidth,
  };
  props.rightEntrance ? (st.right = 0) : (st.left = 0);
  return st;
});

defineExpose({
  open,
  close,
  isShow,
});
</script>

<template>
  <Transition>
    <div
      class="offcanvas-bg"
      v-if="isShow"
      :class="{ 'is-right': props.rightEntrance }"
    ></div>
  </Transition>
  <Transition
    name="custom-class"
    :enter-active-class="enterClass"
    :leave-active-class="leaveClass"
  >
    <div
      v-if="isShow"
      id="offCanvasMenu"
      ref="offCanvasMenu"
      class="overlay"
      :style="overlayStyle"
      :class="{ 'is-right': props.rightEntrance }"
    >
      <div class="overlay-header">
        <span>
          <slot name="header"></slot>
        </span>
        <span class="closebtn">
          <i class="bi bi-x" @click="close"></i>
          <i class="fa-solid fa-xmark" @click="close"></i>
        </span>
      </div>
      <div class="overlay-body">
        <div class="overlay-content">
          <slot name="content"></slot>
        </div>
        <div class="overlay-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.overlay {
  width: 100%;
  position: fixed;
  display: block;
  z-index: 1001;
  top: 0;
  bottom: 0;
  background-color: var(--spak-comp-offcanvas-bg-color);
  overflow-x: hidden;
  transition: 0.5s;
  color: var(--spak-comp-offcanvas-color);
  padding: 0.5em 1.3em;
}
.overlay-header {
  color: var(--spak-comp-offcanvas-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.closebtn {
  font-size: 2.2rem;
  i {
    cursor: pointer;
  }
}

.offcanvas-bg {
  z-index: 1000;
  display: block;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--spak-comp-offcanvas-background-bg-color);
  overflow: auto;
  padding: 2em 0em;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>

<!-- 
  -- necessario animate.css
  -- props 
  --  -> rightEnter: Boolean, -> serve per sapere da dove entrata offcanvas
  --  -> maxWidth: String, (ex. '100%') -> massima apertura offcanvas
  -- slot
  --  -> header, content, footer
  -- emits
 -->
