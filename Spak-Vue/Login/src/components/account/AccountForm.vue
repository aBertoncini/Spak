<script setup></script>

<template>
  <div class="card">
    <div class="card-header">
      <img
        src="@/assets/account/img/logo.png"
        alt="POLLINI"
      />
    </div>
    <div class="card-content">
      <slot name="content"></slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
  <!-- </div> -->
</template>

<style scoped>
.card-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
}
.card-header {
  border: 0;
  box-shadow: none;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 0.7em 2em;
}
.card {
  margin: 1em;
}
</style>
