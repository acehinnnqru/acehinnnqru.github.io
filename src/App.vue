<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from "vue";
import Markdown from "./components/Markdown.vue";

const filepath = ref("/demo.md");
</script>

<template>
  <div><Markdown :filepath="filepath"></Markdown></div>
</template>

<style scoped>
</style>
