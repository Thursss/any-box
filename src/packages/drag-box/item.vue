<template>
  <view
    ref="thisItem"
    class="drag-item"
    :style="{ width: width, flex: !width ? 1 : '' }"
  >
    <slot></slot>
    <div
      ref="resizeRef"
      class="resize"
      @mousedown.prevent="resizeMousedown"
    ></div>
  </view>
</template>
<script lang="ts">
export default {
  name: "DragItem",
};
</script>
<script setup lang="ts">
import { defineProps, ref, onMounted } from "vue-demi";
const { width, minWidth = 10 } = defineProps<{
  width?: number | string;
  minWidth?: number;
}>();

const thisItem = ref<HTMLElement | undefined | null>();
const resizeRef = ref<HTMLElement | undefined | null>();
const nextItem = ref<HTMLElement | undefined | null>();

const thisItemWidth = ref<number>();
const nextItemWidth = ref<number>();
const startX = ref(0);

const onMouseup = () => {
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseup);
};
const onMouseMove = (e: MouseEvent) => {
  e.preventDefault();
  const movepx = e.clientX - startX.value;
  debugger;
  const tw = (thisItemWidth.value ?? 0) + movepx;
  const nw = (nextItemWidth.value ?? 0) - movepx;
  if (tw <= minWidth || nw <= 10) return;
  thisItem.value!.style.width = tw + "px";
  nextItem.value!.style.width = nw + "px";
};
const resizeMousedown = (e: MouseEvent) => {
  nextItem.value = thisItem.value?.nextElementSibling as HTMLElement;
  if (!nextItem) return;

  thisItemWidth.value = thisItem.value?.clientWidth;
  nextItemWidth.value = nextItem.value?.clientWidth;
  // 颜色改变提醒
  startX.value = e.clientX;

  console.log(thisItemWidth.value, nextItemWidth.value, startX.value);

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseup);
};
onMounted(() => {});
</script>

<style lang="scss" scoped>
.drag-item {
  position: relative;
  // width: 100%;
  height: 100%;

  .resize {
    position: absolute;
    top: 0;
    right: 0;
    width: 4px;
    height: 100%;
    cursor: col-resize;
    background-color: #d6d6d6;
  }
}
</style>
