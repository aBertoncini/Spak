<script setup></script>

<template>
  <div class="sidebar-page">
    <div class="sidebar-content">
      <slot name="sideContent"></slot>
    </div>
    <div class="sidebar-page-content">
      <slot name="pageContent"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

<!-- es. parent component 
  <SideBarPage>
    <template v-slot:sideContent>
      <div class="sidebar-item-container">
        <div class="sidebar-separator">REGOLE</div>
        <NuxtLink
          @mouseenter="cursorService.onMouseEnter()"
          @mouseleave="cursorService.onMouseLeave()"
          class="sidebar-item"
          v-for="r in globalStore.rulesList.regole"
          :to="'/scss/' + r"
        >
          {{ r }}
        </NuxtLink>
        <div class="sidebar-separator">COMPONENTI VUE</div>
        <NuxtLink
          @mouseenter="cursorService.onMouseEnter()"
          @mouseleave="cursorService.onMouseLeave()"
          class="sidebar-item"
          v-for="cv in globalStore.rulesList.componentiVue"
          :to="'/vue-components/' + cv"
        >
          {{ cv }}
        </NuxtLink>
      </div>
    </template>
    <template v-slot:pageContent>
      <div class="p-3">
        <NuxtPage></NuxtPage>
      </div>
    </template>
  </SideBarPage>
 -->
