<script setup>
/*
<!---- il componente deve avere ref="NomeRef"
<!---- richiamare NomeRef.show() quando deve essere aperto
<!---- emit di after-close e after-open avvengono dopo close() e open()
<!---- prop contentWidth -> stringa per largezza -> ex '80%'
<!---- slot header
<!---- slot content
<!---- slot buttons
  */

const props = defineProps({
  contentWidth: String,
});
const emit = defineEmits(["after-close", "after-show"]);

const modalActive = ref(false);

const onClickOutside = (ev) => {
  if (ev.target.id === "modalVueContainer") close();
};

const close = () => {
  modalActive.value = false;
  emit("after-close");
};
const show = () => {
  modalActive.value = true;
  emit("after-show");
};

defineExpose({
  close,
  show,
  modalActive,
});
</script>

<template>
  <transition name="modal-animation">
    <div
      v-show="modalActive"
      class="modal-vue"
      @click="onClickOutside"
      id="modalVueContainer"
    >
      <transition name="modal-animation-inner">
        <div
          v-show="modalActive"
          class="modal-vue-inner"
          :style="{ width: contentWidth }"
        >
          <!-- Modal Content -->
          <div class="modal-vue-header">
            <span class="modal-title">
              <slot name="header"></slot>
            </span>
            <span>
              <i @click="close" class="bi bi-x-lg"></i>
              <i @click="close" class="fa-solid fa-xmark"></i>
            </span>
          </div>
          <div class="modal-vue-content">
            <slot name="content"></slot>
          </div>
          <div class="modal-vue-buttons">
            <slot name="buttons"></slot>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.modal-animation {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}
.modal-animation-inner {
  &-enter-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
  }
  &-leave-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }
  &-enter-from {
    opacity: 0;
    transform: scale(0.8);
  }
  &-leave-to {
    transform: scale(0.8);
  }
}
.modal-vue {
  z-index: 1000;
  display: block;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #93939380;
  overflow: auto;
  padding: 2em 0em;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  .modal-vue-inner {
    z-index: 1001;
    position: relative;
    padding: 0em 1em 2em;
    margin: auto;
    width: max-content;
    max-width: 80%;
    background-color: #fff;
    box-shadow: 0 4px 6px -1px #0000001a, 0 2px 4px -1px #0000000f;
    border-radius: 4px;
    .modal-vue-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.2em 0em;
      .modal-title {
        font-size: 1.5em;
        font-weight: 600;
      }
      i {
        color: #00000070;
        font-size: 1.2rem;
        cursor: pointer;
        &:hover {
          color: crimson;
        }
      }
    }
    .modal-vue-buttons {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 0.3em;
      margin-top: 1.7em;
    }
  }
}
</style>
