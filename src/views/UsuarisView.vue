<script setup>
import { ref, computed } from 'vue'
import { watch } from 'vue';

const contacts = ref([
    { name: 'Messi', team: "barcelona" },
    { name: 'Cristiano', team: "madrid" },
    { name: 'Neymar', team: "barcelona" },
    { name: 'Suarez', team: "barcelona" },
]);

const buscar = ref('')

const filtrar = computed(() => {
    return contacts.value.filter(contact =>
        contact.name.toLowerCase().includes(buscar.value.toLowerCase())
    )
})

watch(
    () => buscar.value,
    (newFiltre, oldFiltre) => {
        console.log(`Canvi de Filtre: ${oldFiltre} → ${newFiltre}`);
    }
);
</script>

<template>
    <h1>Llistat d'Usuaris</h1>

    <input v-model="buscar" placeholder="Buscar per nom..." />

    <ul>
        <li v-for="(contact, index) in filtrar" :key="index">
            {{ contact.name }}
        </li>
    </ul>
</template>
