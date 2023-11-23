<script setup>
const props = defineProps({
  val: String,
  label: String,
  isRequired: Boolean,
  classType: Number, //<!--? classico (1 || undefined) o bottom line (2)
});

const emit = defineEmits(["update:val", "onchange"]);

function onChange(ev) {
  emit("update:val", ev.target.value);
  emit("onchange");
}
</script>
<template>
  <div
    class="spak select floating-label-container"
    :class="{ 'bottom-line': props.classType == 2 }"
  >
    <select :value="props.val" @change="onChange" :required="props.isRequired">
      <slot> </slot>
    </select>
    <label>{{ props.label }}</label>
  </div>
</template>
<style scoped lang="scss"></style>

<!--^^^^ COME RICHIAMARE ^^^-->
<!-- 
      <FormSelect
      :label="'Sede'"
      class="w-100"
      v-model:val="formVal.val"
      :is-required="true"
      :class-type="2"
    >
      <option
        v-for="(opt, kop) in options"
        :key="'opt' + kop"
        :value="opt.val"
      >
        {{ opt.name }}
      </option>
    </FormSelect>
 -->
