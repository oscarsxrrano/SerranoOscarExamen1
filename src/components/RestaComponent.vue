<script setup>
import { inject, computed, provide} from 'vue';

const contador = inject('contador');
const restar = computed(() => (
    contador.value = contador.value - 0.5
));

provide('restar', restar);
</script>


<template>
<button @click="restar">-1</button>
</template>