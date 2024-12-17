<script setup>
import { inject } from 'vue';
 
const products = inject('products');
</script>

<template>
    <h1>Product Detail {{ products.id }}</h1>
    <p>{{ $route.params.id }}</p>
</template>