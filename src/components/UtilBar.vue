<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    catogories: String
});
</script>
<template>
  <div>
    <div>
      <div class="h-15px w-15px">&#x3c</div>
      <div class="h-15px w-15px">&#x3e</div>
      <div class="h-20px w-min-15px">{{ catogories }}</div>
    </div>
    <div></div>
  </div>
</template>
<style scoped>
/* test */
</style>
