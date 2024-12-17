<script setup>
import { RouterLink } from 'vue-router';
console.log(43)
</script>

<template>

    <ul id="nav">
        <li>
            <RouterLink class="rout" to="/">Home</RouterLink>
        </li>
        <li>
            <RouterLink class="rout" to="/exercici1">Exercici 1 - Products</RouterLink>
        </li>
        <li>
            <RouterLink class="rout" to="/exercici2">Exercici 2 - Comptador</RouterLink>
        </li>
        <li>
            <RouterLink class="rout" to="/exercici3">Exercici 3 - Usuaris</RouterLink>
        </li>
    </ul>
</template>

<style>
    #nav {
        list-style: none;
        display: flex;
        flex-direction: row;
    }
</style>