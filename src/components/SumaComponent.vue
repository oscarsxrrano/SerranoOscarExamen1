<script setup>
import { inject, computed, provide} from 'vue';

const contador = inject('contador');


const incrementar = computed(() => (
    contador.value = contador.value + 0.5
));

provide('incrementar', incrementar);
</script>


<template>
<button @click="incrementar">+1</button>
</template>