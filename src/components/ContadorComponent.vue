<script setup>
import { provide, ref, inject } from 'vue';
import SumaComponent from '@/components/SumaComponent.vue'
import RestaComponent from '@/components/RestaComponent.vue'

const contador = ref(0)

provide('contador', contador)

</script>

<template>
    <div>
        <h1>Comptador</h1>
        <SumaComponent/>
        <RestaComponent/>
        <p>El valor del comptador és: {{ contador }}</p>
    </div>
</template>