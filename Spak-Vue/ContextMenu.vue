<script setup>
import { ref, computed, nextTick } from "vue";
import { GlobalEvents } from "vue-global-events"; //<!---- da installare - npm install vue-global-events

/*
<!---- i buttons all'interno di contextmenu devono aver class="context-menu-item"
<!---- il componente deve avere la propria ref e richiamare ContextMenuRef.open() per essere aperto
*/

const props = defineProps({
  btnNum: Number, //<!---- numero di pulsanti nel context-menu (per la graandezza)
});

const style = computed(() => {
  return {
    top: top.value + "px",
    left: left.value + "px",
  };
});

const contextMenuRef = ref(null);

const isVisible = ref(false);
const left = ref(0);
const top = ref(0);

function close() {
  isVisible.value = false;
}

const closeContextMenu = (ev) => {
  if (!ev.currentTarget.activeElement.classList.contains("context-menu-item"))
    close();
};

function open(ev) {
  let { innerHeight, innerWidth } = window;
  let elHeight = 30 * props.btnNum; //this.$el.clientHeight; -> btn height * btn num
  let elWidth = 200; //this.$el.clientWidth;
  //trovare clientHeight e clientWidth per settare elHeight e elWidth
  //console.log(this.$el, elHeight, elWidth)
  top.value = innerHeight - ev.y < elHeight ? ev.y - elHeight : ev.y;
  left.value = innerWidth - ev.x < elWidth ? ev.x - elWidth : ev.x;
  isVisible.value = true;
  nextTick(() => {
    contextMenuRef.value.focus();
  });
}

defineExpose({
  close,
  open,
});
</script>

<template>
  <GlobalEvents v-if="isVisible" @click="closeContextMenu"></GlobalEvents>
  <Transition name="context-menu-animation">
    <div
      class="context-menu"
      ref="contextMenuRef"
      id="contextMenuId"
      :style="style"
      v-show="isVisible"
      tabindex="-1"
    >
      <slot></slot>
    </div>
  </Transition>
</template>

<style lang="scss">
$menu-bg: #fff;
$menu-color: #000;
$item-bg: #fff;
$item-color: #000;

.context-menu {
  display: flex;
  flex-flow: column;
  position: fixed;
  //position: absolute;
  z-index: 999;
  width: 200px;
  background-color: $menu-bg;
  border: 2px solid $menu-color;
  border-radius: 4px;
  box-shadow: 0 4px 6px -1px #0000001a, 0 2px 4px -1px #0000000f;

  .context-menu-item {
    display: flex;
    flex-flow: row nowrap;
    font-size: 0.85rem;
    font-weight: 700;
    background-color: transparent;
    color: #000;
    cursor: pointer;
    border: none;
    //border-radius: 4px;
    //border: 1px solid $c8;
    padding-bottom: calc(0.5em - 1px);
    padding-left: 1em;
    padding-right: 1em;
    padding-top: calc(0.5em - 1px);
    white-space: nowrap;
    &:hover {
      background-color: adjust($item-bg, -20%);
      color: $item-color;
    }
    &:disabled {
      background-color: adjust($item-bg, 25%);
      color: adjust($item-color, 13%);
      cursor: not-allowed;
    }

    & .icon {
      height: 1.5em;
      width: 1.5em;
      &:first-child:not(:last-child) {
        margin-left: calc(-0.5em - 1px);
        margin-right: 0.25em;
      }
      &:last-child:not(:first-child) {
        margin-left: 0.25em;
        margin-right: calc(-0.5em - 1px);
      }
      &:first-child:last-child {
        margin-left: calc(-0.5em - 1px);
        margin-right: calc(-0.5em - 1px);
      }
    }
  }
}

.context-menu-animation {
  &-enter-active {
    //transition: all 0.3s linear; //cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
    animation: growDown 300ms ease-in-out forwards;
    transform-origin: top;
  }
  &-leave-active {
    transition: all 200ms cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }
  &-enter-from {
    opacity: 0;
  }
  &-leave-to {
    opacity: 0;
  }
}
@keyframes growDown {
  0% {
    transform: scaleY(0);
    z-index: inherit;
  }
  80% {
    transform: scaleY(1.1);
  }
  100% {
    transform: scaleY(1);
  }
}
</style>
