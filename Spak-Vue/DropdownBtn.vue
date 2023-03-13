<script setup>
//import { ref } from "vue"; <!---- da commentare in nuxt
//import { onClickOutside } from "@vueuse/core"; <!---- da commentare in nuxt
import anime from "animejs/lib/anime.es";

const props = defineProps({
  dropbtnClass: String,
  dropContentClass: String,
  dropOnHover: Boolean,
  animateDropBtn: Object, //<!---- value: true|false, target: ''|'icon'
});

const dropdownContainerRef = ref(null);
const isActive = ref(false);

onClickOutside(dropdownContainerRef, (e) => {
  closeDropdown();
});

function toggleDropdown() {
  if (isActive.value) closeDropdown();
  else openDropdown();
}

function closeDropdown() {
  anime({
    targets: ".dropdown-content",
    translateY: "-15px",
    opacity: 0,
    easing: "easeInOutQuad",
    duration: 300,
    complete: (anim) => {
      isActive.value = false;
    },
  });
  if (props.animateDropBtn.value) {
    let target = `.dropdown-btn ${
      props.animateDropBtn.target === "icon" ? "i" : ""
    }`;
    anime({
      targets: target,
      rotate: "0deg",
      easing: "easeInOutQuad",
      duration: 300,
    });
  }
}

function openDropdown() {
  isActive.value = true;
  anime({
    targets: ".dropdown-content",
    translateY: "10px",
    easing: "easeInOutQuad",
    opacity: 1,
    duration: 300,
  });
  if (props.animateDropBtn.value) {
    let target = `.dropdown-btn ${
      props.animateDropBtn.target === "icon" ? "i" : ""
    }`;
    anime({
      targets: target,
      rotate: "90deg",
      easing: "easeInOutQuad",
      duration: 300,
    });
  }
}

defineExpose({
  isActive,
  toggleDropdown,
  closeDropdown,
  openDropdown,
});
</script>

<template>
  <div
    class="dropdown"
    :class="{ 'drop-on-hover': props.dropOnHover, 'is-active': isActive }"
    ref="dropdownContainerRef"
  >
    <div class="dropdown-btn" :class="props.dropbtnClass">
      <slot name="button"></slot>
    </div>
    <div
      id="dropdown-content"
      class="dropdown-content"
      :class="props.dropContentClass"
    >
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dropdown {
  display: inline-block;
  &.drop-on-hover:hover,
  &.is-active {
    .dropdown-content {
      display: block;
      opacity: 1;
    }
  }
}

.dropdown-content {
  opacity: 0;
  display: none;
  position: absolute;
  min-width: 10rem;
  width: max-content;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  text-decoration: none;
  padding: 0.75rem 0;
  //top: calc(100% + 0.25em);
  &.is-right {
    right: 0;
  }
}
</style>

<style lang="scss">
// singoli elementi del menu formati da li.dropdown-li > button
.dropdown-li {
  text-decoration: none;
  list-style-type: none;
  background-color: transparent;
  cursor: pointer;
  & > button {
    padding: 0.375rem 1rem;
    border: none;
    display: block;
    width: 100%;
    background-color: transparent;
    border: 0;
    text-align: inherit;
    clear: both;
    border-radius: 0px;
    &:hover,
    &:focus,
    &:active {
      background-color: #00000011;
    }
    &:disabled {
      cursor: not-allowed;
    }
  }
}

// elemento <hr/> per dividere all'interno del menu
.dropdown-divider {
  background-color: hsl(0deg, 0%, 93%);
  border: none;
  display: block;
  height: 1px;
  margin: 0.5rem 0;
}
</style>

<!-- !!! componente DropDown !!!
  npm install animejs vueuse/core
  slot content -> li.dropdown-li > button (anche in style del componente padre se si vuole personalizzare)
  props.animateDropdownBtn -> props con value: true|false e se true -> target: ''(anima il pulsante), 'icon'(anima l'icona interna) 
-->
