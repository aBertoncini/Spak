<script setup>
const props = defineProps({
  val: String,
  label: String,
  isRequired: Boolean,
  classType: Number, //<!--? classico (1 || undefined) o bottom line (2)
});

const emit = defineEmits(["update:val"]);
</script>
<template>
  <div class="floating-label-container">
    <input
      class="float-field --t1"
      :class="{ 'bottom-line': props.classType == 2 }"
      placeholder="."
      :required="props.isRequired"
      :value="props.val"
      @input="emit('update:val', $event.target.value)"
    />
    <label>{{ props.label }}</label>
  </div>
</template>
<style scoped lang="scss"></style>

<!--^^^ COME RICHIAMARE ^^^-->
<!-- 
  <FormInput
  class="form-input"
  :label="'Nome'"
  v-model:val="formVal.val"
  :is-required="true"
  :class-type="2"
></FormInput>
-->
