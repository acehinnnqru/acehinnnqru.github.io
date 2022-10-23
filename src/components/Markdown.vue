<script setup lang="ts">
import { marked } from "marked";
import { ref, computed } from "vue";

const props = defineProps({
  filepath: String,
});

console.log(props.filepath);

const md = ref("# test title");

const markdownToHtml = computed(() => {
  return marked(md.value);
});

async function fetchData() {
    if (props.filepath === undefined) {
        return
    }
    await fetch(props.filepath).then(
        res => res.text()).then(
        text => {
            md.value = text;
        }
    )
}

fetchData();
</script>

<template>
  <div v-html="markdownToHtml"></div>
</template>

