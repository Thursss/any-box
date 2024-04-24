<template>
  <view ref="dragBox" class="drag-box">
    <slot></slot>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted, useSlots } from "vue-demi";

const slot = useSlots();
const defaultSlot = slot.default?.();

const dragBox = ref();

onMounted(() => {
  console.log(defaultSlot);
});
</script>

<style lang="scss" scoped>
.drag-box {
  display: flex;
}
</style>
