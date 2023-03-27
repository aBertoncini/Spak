<script setup>
import { onMounted } from "vue";
import { useUserStore } from "@/stores/account/user.js";
import { ref } from "vue";
import CountriesService from "@/services/account/countries.service.js";

const userStore = useUserStore();
const cService = new CountriesService();

const emit = defineEmits(["submit"]);

onMounted(() => {
  getStati();
});

const list = ref({
  stati: [],
  regioni: [],
  provincie: [],
  città: [],
});
const selected = ref({
  stato: {},
  regione: {},
  provincia: {},
  città: {},
});

async function getStati() {
  let italia = {
    name: "Italia",
    countryId: 3175395,
  };
  list.value.stati = await cService.getStati();
  list.value.stati.unshift(italia);
}

async function getRegioni() {
  userStore.data.nazione = selected.value.stato.name;
  list.value.regioni = await cService.getRegioni(
    selected.value.stato.countryId
  );
}

async function getProvincie() {
  userStore.data.regione = selected.value.regione.name;
  list.value.provincie = await cService.getProvincie(
    selected.value.regione.stateId
  );
}

async function getCitta() {
  userStore.data.provincia = selected.value.provincia.name;
  list.value.città = await cService.getCitta(
    selected.value.provincia.provinceId
  );
}

function onSubmit() {
  emit("submit");
}
</script>

<template>
  <div id="compile-container" class="container-center v p-auto">
    <form id="compile-form" @submit.prevent="onSubmit">
      <div>
        <label for="compile-name" class="txt-label-s">Nome</label>
        <input
          id="compile-name"
          class="spak input"
          type="text"
          placeholder="Nome"
          v-model="userStore.data.nome"
          required
        />
      </div>
      <div>
        <label for="compile-cognome" class="txt-label-s">Cognome</label>
        <input
          id="compile-cognome"
          class="spak input"
          type="text"
          placeholder="Cognome"
          v-model="userStore.data.cognome"
          required
        />
      </div>
      <div class="check-container">
        <div class="spak-radio">
          <input
            class=""
            type="radio"
            name="tipo"
            id="inlineRadio1"
            value="privato"
            v-model="userStore.data.tipo"
          />
          <label class="" for="inlineRadio1">Privato</label>
        </div>
        <div class="spak-radio">
          <input
            class=""
            type="radio"
            name="tipo"
            id="inlineRadio2"
            value="societa"
            v-model="userStore.data.tipo"
          />
          <label class="" for="inlineRadio2"> Societ&agrave; </label>
        </div>
      </div>
      <div>
        <label for="compile-societa" class="txt-label-s">
          Nome Societ&agrave; <span class="optional-label">*</span>
        </label>
        <input
          id="compile-societa"
          class="spak input"
          type="text"
          placeholder="Società"
          v-model="userStore.data.societa"
          :required="userStore.data.tipo === 'societa'"
        />
      </div>

      <div class="container-select-label-top">
        <label class="txt-label-s" for="compile-nazione">Stato</label>
        <div class="spak select">
          <select
            id="compile-nazione"
            v-model="selected.stato"
            required
            @change="getRegioni()"
          >
            <option v-for="(val, i) in list.stati" :key="i" :value="val">
              {{ val.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="container-select-label-top">
        <label class="txt-label-s" for="compile-regione">Regione</label>
        <div class="spak select">
          <select
            id="compile-regione"
            v-model="selected.regione"
            required
            @change="getProvincie()"
          >
            <option v-for="(val, i) in list.regioni" :key="i" :value="val">
              {{ val.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="container-select-label-top">
        <label class="txt-label-s" for="compile-prov">Provincia</label>
        <div class="spak select">
          <select
            id="compile-prov"
            required
            v-model="selected.provincia"
            @change="getCitta()"
          >
            <option v-for="(val, i) in list.provincie" :key="i" :value="val">
              {{ val.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="container-select-label-top">
        <label class="txt-label-s" for="compile-citta">Citt&agrave;</label>
        <div class="spak select">
          <select id="compile-citta" v-model="userStore.data.citta">
            <option v-for="(val, i) in list.città" :key="i" :value="val.name">
              {{ val.name }}
            </option>
          </select>
        </div>
      </div>

      <div id="number-grid">
        <label for="number" class="txt-label-s"> Telefono o Cellulare </label>
        <input
          id="number"
          class="spak input"
          type="number"
          placeholder="Telefono o Cellulare"
          v-model="userStore.data.telefono"
        />
      </div>

      <button id="submit" type="submit" class="btn color-2">Registrati</button>
    </form>
    <p class="txt-s optional-label w-100">* opzionale con account privato</p>
  </div>
</template>

<style scoped>
.spak input {
  margin: 0;
}
.btn {
  margin: 0.3em auto;
  width: 100%;
  font-weight: 700;
}
form {
  width: 100%;
  display: grid;
  /*grid-template-columns: 50% 50%;*/
  gap: 0.4em 0.3em;
}
#submit,
#number-grid {
  grid-column: 1 / 3;
}
.check-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  padding-top: 1.5em;
}
.optional-label {
  color: red;
}
.spak-radio + .spak-radio {
  margin-top: 0;
}
</style>
