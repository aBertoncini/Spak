<!-- 

^^^ da importare nel componente figlio ^^^
function addRow(i) {
  gStore.sediList.push({
    codice: undefined,
    des_sede: undefined,
    cod_sede: undefined,
  });
  rowNum.value = gStore.sediList.length;
}

function deleteRow(i) {
  gStore.sediList.splice(i - 1, 1);
  rowNum.value = gStore.sediList.length;
} 

-->

<script setup>
import { onMounted } from "vue";

const props = defineProps({
  rowNum: Number,
  opts: Object,
  list: Array,
});

const emit = defineEmits(["addRow", "deleteRow"]);

onMounted(() => {});
</script>

<template>
  <div class="container-flex v list-row">
    <div class="headers" v-if="rowNum > 0">
      <template v-for="(name, h) in props.opts.rowNames" :key="h">
        <span>{{ name }}</span>
      </template>
    </div>

    <template v-for="i in props.rowNum" :key="i">
      <div class="field-row">
        <template v-for="(fr, j) in props.opts.rowAttributes" :key="j">
          <!-- <slot name="row"></slot> -->
          <!--string-->
          <template v-if="props.opts.types[j] == 's'">
            <input v-model="props.list[i - 1][fr]" type="text" class="input" />
          </template>
          <!--int-->
          <template v-else-if="props.opts.types[j] == 'i'">
            <input
              v-model="props.list[i - 1][fr]"
              type="number"
              class="input"
            />
          </template>
          <!--bool-->
          <!-- <template v-else-if="props.types[i] == 'b'">
          <div class="form-check d-flex form-switch align-content-center">
            {{ convertBoolToInt(i) }}
            <input
              v-model="newRecordSideArr[i]"
              @change="convertBoolToInt(i)"
              type="checkbox"
              role="switch"
              :id="'id' + props.types[i] + i"
              class="form-check-input form-switch"
              :placeholder="fields[i]"
              :disabled="formState == 0 || formState == 4"
              :required="requiredArr[i]"
            />
            <label :for="'id' + props.types[i] + i">&nbsp;{{ fields[i] }}</label>
          </div>
        </template> -->
          <!--date-->
          <!-- <template v-else-if="props.types[i] == 'd'">
          <div class="form-floating">
            <input
              v-model="newRecordSideArr[i]"
              @change="convertDateInt(i)"
              type="date"
              :id="'id' + props.types[i] + i"
              class="form-control"
              :placeholder="fields[i]"
              :disabled="formState == 0 || formState == 4"
              :required="requiredArr[i]"
            />
            <label :for="'id' + props.types[i] + i" class=" "
              >&nbsp;{{ fields[i] }}:</label
            >
          </div>
        </template> -->
          <!--text-->
          <!--  <template v-else-if="props.types[i] == 't'">
          <textarea
            v-model="newRecord[i]"
            :id="'id' + props.types[i] + i"
            class="form-control"
            :placeholder="fields[i]"
            :disabled="formState == 0 || formState == 4"
            :required="requiredArr[i]"
          ></textarea>
        </template> -->
          <!--allegato-->
          <!-- <template v-else-if="props.types[i] == 'allegato'">
          <div class="input-group">
            <label :for="'id' + props.types[i] + i" class="input-group-text"
              >{{ fields[i] }}:</label
            >
            <input
              @change="newRecord[i]"
              type="file"
              :id="'id' + props.types[i] + i"
              class="form-control"
              :placeholder="fields[i]"
              :required="requiredArr[i]"
              :disabled="disabledArr[i]"
            />
          </div>
        </template> -->
        </template>

        <div
          class="btn-transparent-icon field-icon"
          @click="emit('deleteRow', i)"
        >
          <i class="fa-solid fa-trash-can"></i>
        </div>
      </div>
    </template>
  </div>
  <div class="btn-transparent-icon field-icon" @click="emit('addRow', i)">
    <i class="fa-solid fa-plus"></i>
  </div>
  <div class="m-2" v-if="rowNum > 0">
    <slot name="buttons"></slot>
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/Spak-scss/colors";
.field-row {
  display: flex;
  flex-flow: row nowrap;
  margin: 0.35em 0;
  gap: 0.35em;
}
.field-icon {
  transition: all 0.3s;
  color: $primary-text;
  &:hover {
    color: darken($primary-text, 20%);
  }
}

.headers {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  padding-right: 3em;
  font-weight: 700;
  color: $primary-text;
}
</style>
