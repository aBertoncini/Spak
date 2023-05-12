<script setup>
const route = useRoute();

const crumbs = computed(() => {
  let r = route;
  const crumbs = r.fullPath.split("/");
  return crumbs;
});

function joinCrumbs(endIndex, crumbs) {
  let slicedArr = crumbs.slice(0, endIndex + 1);
  let joinedArr = slicedArr.join("/");
  return joinedArr.length > 1 ? joinedArr : "/";
}
</script>

<template>
  <nav class="breadcrumb has-arrow-separator">
    <ul>
      <li v-for="(crumb, i) in crumbs" :key="i">
        <NuxtLink
          :to="joinCrumbs(i, crumbs)"
          :title="crumb !== '' ? crumb : 'Home'"
        >
          {{ crumb !== "" ? crumb : "Spak" }}
        </NuxtLink>
        <!--TODO FARE VERSIONE PER VUE -->
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.breadcrumb {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
}
</style>
