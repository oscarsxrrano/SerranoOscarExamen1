<script setup>
import { ref, provide } from 'vue';
import { RouterLink } from 'vue-router';

const products = ref([
    { name: 'Camiseta Nike', description: 'samarreta molt bonica i a bon preu', id: 1 },
    { name: 'Camiseta Adidas', description: 'samarreta molt bonica i a bon preu', id: 2  },
    { name: 'Camiseta Decathlohn', description: 'samarreta molt bonica i a bon preu', id: 3  },
    { name: 'Camiseta Puma', description: 'samarreta molt bonica i a bon preu', id: 4  },
]);

provide('products', products)
</script>

<template>
    <div>
        <ul>
            <li v-for="product in products" :key="product.id">
                <RouterLink :to="'/productdetail/' + product.id">{{ product.name }}</RouterLink>
            </li>
        </ul>
    </div>
</template>