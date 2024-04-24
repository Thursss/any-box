<script setup lang="ts">
import { DargBox, DargItem } from "./packages";
</script>

<template>
  <div>
    <DargBox class="group">
      <DargItem width="200px" :min-width="130">x</DargItem>
      <DargItem width="800px" :min-width="100">x</DargItem>
      <DargItem width="500px" :min-width="100">x</DargItem>
      <DargItem>x</DargItem>
    </DargBox>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
.group {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
}
</style>
