<script setup>
import { inject } from 'vue';

const contador = inject('comptador');
console.log(contador)
const sumar = () => {
    contador.value++
}

</script>

<template>
        <button @click="sumar">Incrementar</button>
        <p>El valor del comptador és: {{ contador }}</p>
</template>