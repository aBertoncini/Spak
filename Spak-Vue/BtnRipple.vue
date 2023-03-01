<!-- ^^^ HELP COMPONENTE BtnRipple ^^^
  -- props: :customClass -> class del button -> ex. :customClass="'btn'"
  -- emits: @on-click -> equivale a @click di un normale button
-->

<script setup>
import { ref } from "vue";

const props = defineProps({
  customClass: String,
});

const emit = defineEmits(["on-click"]);

const ripples = ref({});
const rippleKey = ref(0);
const btnRippleRef = ref(null);

function animateRipple(e) {
  let el = btnRippleRef.value;
  let pos = el.getBoundingClientRect();

  ripples.value = {
    x: e.clientX - pos.left,
    y: e.clientY - pos.top,
    show: true,
  };

  rippleKey.value++;
  emit("on-click");
}
function rippleEnd() {
  ripples.value.show = false;
}
</script>

<template>
  <button
    class="btn-ripple"
    :class="props.customClass"
    ref="btnRippleRef"
    @click="animateRipple"
  >
    <slot></slot>
    <TransitionGroup>
      <span
        :key="rippleKey"
        v-if="ripples.show"
        class="ripple"
        ref="ripple"
        :style="{ top: ripples.y + 'px', left: ripples.x + 'px' }"
        @animationend="rippleEnd"
      >
      </span>
    </TransitionGroup>
  </button>
</template>

<style scoped lang="scss">
.btn-ripple {
  overflow: hidden;
  display: inline-block;
  position: relative;
  user-select: none;
  .ripple {
    background-color: #ffffff88;
    overflow: hidden;
    width: 1rem;
    height: 1rem;
    position: absolute;
    border-radius: 50%;
    transform: translateX(-100%) translateY(-100%);
    mix-blend-mode: screen;
    animation: ripple 1250ms ease-out forwards, fade 1500ms ease-out forwards;
  }
}

@keyframes ripple {
  0% {
    transform: translate(-100%, -100%);
  }
  80% {
    transform: translate(-100%, -100%) scale(50);
  }
  100% {
    transform: translate(-100%, -100%) scale(50);
    opacity: 0;
  }
}

@keyframes fade {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
