<script setup>
import { ref } from "vue";

const props = defineProps({
  json: Array,
});

const emit = defineEmits(["update:json", "readed"]);

const fileContent = ref("");
let fileName = "file";
const isFileLoaded = ref(false);

function handleFileSelect(event) {
  const file = event.target.files[0];
  fileName = file.name;
  const reader = new FileReader();

  reader.onloadend = () => {
    fileContent.value = JSON.parse(reader.result);
    emit("update:json", fileContent.value);
    emit("readed");
    isFileLoaded.value = true;
  };

  reader.readAsText(file);
}

function saveJsonFile() {
  const json = fileContent.value;
  const blob = new Blob([JSON.stringify(json, null, 2)], {
    type: "application/json",
  });
  const url = window.URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
</script>

<template>
  <div class="file m-2">
    <label class="file-label">
      <input
        class="file-input"
        type="file"
        name="resume"
        @change="handleFileSelect"
      />
      <span class="file-cta">
        <span class="file-icon">
          <i class="fas fa-upload"></i>
        </span>
        <span class="file-label"> JSON </span>
      </span>
    </label>
  </div>

  <button :disabled="!isFileLoaded" @click="saveJsonFile" class="btn">
    scarica file JSON
  </button>
</template>

<style scoped></style>
