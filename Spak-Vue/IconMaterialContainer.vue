<script setup>
const props = defineProps({
  iconClass: String, //<!---- icon-class quando richiamato come componente
  text: String,
  icon: String,
  containerClass: String,
});
</script>

<template>
  <div class="material-symbols-container" :class="props.containerClass">
    <slot name="before-icon"></slot>
    <i class="material-symbols-rounded" :class="props.iconClass">
      {{ props.icon }}
    </i>
    {{ props.text }}
    <slot name="after-icon"></slot>
  </div>
</template>

<style scoped>
/*<!--* style se non disponibile in SCSSpak*/
.material-symbols-container {
  display: flex;
  align-items: center;
}
.material-symbols-container.inline {
  display: inline-flex;
}
.material-symbols-rounded {
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 15;
  font-size: 1.2em;
}
.material-symbols-rounded.no-fill {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 15;
}

/*<!--* dinamic icon - how to use */
/* .material-symbols-rounded.icon-class::before {
  content: "person";
  color: red;
} */

/*
<!--! README
  componente per utilizzare le icone di google material
*/
</style>
