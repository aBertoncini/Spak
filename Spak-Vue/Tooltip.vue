<script setup>
import { createPopper } from "@popperjs/core";
import { onClickOutside } from "@vueuse/core";

const tooltipRef = ref(null);
const popperInstance = ref({});
const isShown = ref(false);

function getVirtualEl(x = 0, y = 0) {
  return () => ({
    width: 0,
    height: 0,
    top: y,
    right: x,
    bottom: y,
    left: x,
  });
}

const virtualEl = {
  getBoundingClientRect: getVirtualEl(),
};

function createTooltip(el) {
  popperInstance.value = createPopper(el, tooltipRef.value, {
    placement: "auto",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 8],
        },
      },
    ],
  });
}

function show(id) {
  if (popperInstance.value) popperInstance.value.destroy();
  createTooltip(document.getElementById(id));

  isShown.value = true;
  popperInstance.value.setOptions((options) => ({
    ...options,
    modifiers: [
      ...options.modifiers,
      { name: "eventListeners", enabled: true },
    ],
  }));
  popperInstance.value.update();
}

function hide() {
  isShown.value = false;
  popperInstance.value.setOptions((options) => ({
    ...options,
    modifiers: [
      ...options.modifiers,
      { name: "eventListeners", enabled: false },
    ],
  }));
  popperInstance.value.update();
}

function toggleTooltip(id) {
  isShown.value ? hide() : show(id);
}

onClickOutside(tooltipRef, (event) => {
  hide();
});

defineExpose({
  show,
  hide,
  toggleTooltip,
  isShown,
});

onMounted(() => {
  createTooltip(virtualEl);
});
onUnmounted(() => {
  popperInstance.value.destroy();
});
</script>

<template>
  <Transition
    name="tooltip"
    enter-active-class="animate__animated animate__fadeIn"
  >
    <div id="tooltip" ref="tooltipRef" role="tooltip" v-show="isShown">
      <slot name="content"></slot>
      <div id="arrow" data-popper-arrow></div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
#tooltip {
  background-color: var(--spak-comp-tooltip-bg-color);
  color: var(--spak-comp-tooltip-color);
  padding: 0.25em 0.65em;
  border-radius: 8px;
  font-size: 0.85em;
  &[data-popper-placement^="top"] > #arrow {
    bottom: -4px;
  }
  &[data-popper-placement^="bottom"] > #arrow {
    top: -4px;
  }
  &[data-popper-placement^="left"] > #arrow {
    right: -4px;
  }
  &[data-popper-placement^="right"] > #arrow {
    left: -4px;
  }
}

#arrow,
#arrow::before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
}

#arrow {
  visibility: hidden;
}

#arrow::before {
  visibility: visible;
  content: "";
  transform: rotate(45deg);
}
</style>

<!---- UTILIZZO COMPONENTE TOOLTIP MULTIPLO
  - tooltip in popper.js per elementi multipli che condividono lo stesso tooltip (anche se contenuto diverso)
    può essere visualizzato 1 tooltip per volta

  - npm 
    - popperjs (npm install @popperjs/core)
    - animate.css (abilitare in variables.scss)
    - vueuse clickoutside (npm install @vueuse/core)

  exposed - 
    - show() -> mostra tooltip
    - hide() -> nasconde tooltip
    - toggleTooltip(id) -> mostra/nasconde il tooltip se nascosto/visibile - passare id elemento al quale si vuole mettere il tooltip

  --- how to use ---
    <script setup>
      const tooltipRef = ref(null);

      function tooltipShow(id) {
        tooltipRef.value.toggleTooltip(id);
      }
    </script>
    
    <template>
      <Tooltip ref="tooltipRef">
        <template v-slot:content>
          {{ eventsStore.popContent }}
        </template>
      </Tooltip>
    </template>

  --- variables.scss ---
    [...]
    tooltip: (
      bg-color: rgba($secondary, 0.95),
      color: $white-soft,
    ),
-->
